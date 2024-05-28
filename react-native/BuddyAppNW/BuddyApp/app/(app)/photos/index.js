import React, { useEffect, useState, memo, useCallback, useMemo } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { setphotoState, setfilePathState } from '../../../context/slices/photoSlice/photoSlice';
import { setmainPhotoState } from '../../../context/slices/photoSlice/photoSlice';
import { remove, uploadData, list, getUrl } from 'aws-amplify/storage';
import { useSession } from '../../../ctx';
import * as ImagePicker from 'expo-image-picker';
import { getUrlResult } from '../../../context/middleware/Photo/settings';

const Photos = memo(() => {
  const router = useRouter();
  const photos = useSelector((state) => state.photoData.data.photos);
  const pathFile = useSelector((state) => state.photoData.data.filePath);
  const dispatch = useDispatch();
  const { session: hiddencredentials } = useSession();

  const [file, setFile] = useState([]);
  const [removeFiles, setRemoveFiles] = useState([]);


  useEffect(() => {
    if (photos.length > 0) {
      setFile(photos);
    }
  }, [photos]);

  useEffect(() => {
    dispatch(getUrlResult())
      .then((result) => {
        // Handle successful result if needed
        // console.log("result: ", result.meta.requestStatus)
      })
      .catch((error) => {
        // Handle error if needed
        console.log("error: ", error)
      });
  }, [dispatch]);
  

  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFile(prev => {
        const updatedFile = [...prev];
        updatedFile[index] = result.assets[0];
        if (updatedFile.length > 7) {
          updatedFile.splice(7);
        }
        return updatedFile;
      });
    }
  };

  const onHandleConfirm = () => {
    uploadPhoto();
    if (removeFiles.length > 0) {
      removeS3Image();
    }
  };

  const uploadPhoto = async () => {
    await confirmPhotos();
    console.log("uploadPhoto read")
    if (Array.isArray(file)) {
      for (const item of file) {
        if (typeof item === 'object' && item !== null && 'uri' in item) {
          console.log("uploadPhoto.item: ", file)
          let filename = item?.fileName;
          const filepath = item?.uri;
          try {
            console.log("try")
            // const fileData = await fetch(filepath.replace('file://', '')).then(response => response.blob());
            const fileData = await fetch(filepath).then(response => response.blob());
            console.log("fileData: ", fileData)
            const result = await uploadData({
              path: ({ identityId }) => `private/${identityId}/album/2024/${fileData._data.name}`,
              data: fileData,
              contentType: fileData._data.type,
            }).result;
            console.log("uploadPhoto.result: ", result)
            Alert.alert('Photos successfully uploaded');
          } catch (error) {
            console.log('Error : ', error);
          }
        }
      }
    }
    router.back();
  };

  const removeS3Image = async () => {
    let count = 0;
    const pathFileToRemove = await pathFile.filter((item, index) => {
      if (item !== 0 && item !== null && item !== undefined && item !== '' && typeof item === 'string' && removeFiles.includes(index)) {
        return item;
      }
    });
    for (const item of pathFileToRemove) {
      try {
        await remove({
          path: item,
        });
        count++;
        dispatch(setmainPhotoState(''))
        console.log(`Successfully removed ${count} photo(s)`);
      } catch (error) {
        console.log('Error ', error);
      }
      dispatch(setfilePathState(pathFileToRemove));
    }
      if (photos !== undefined && photos?.length > 0 ) {
        dispatch(setmainPhotoState(photos[0]));
      }else{
        dispatch(setmainPhotoState(''))
      }
  };

  const removeFile = (indexToRemove) => {
    setRemoveFiles(prev => [...prev, indexToRemove]);
    setFile(prev => {
      const updatedFile = [...prev];
      updatedFile[indexToRemove] = '';
      return updatedFile;
    });
  };

  const resetImages = () => {
    const result = getIndicesOfNonZeroNonNull(file);
    setRemoveFiles(result);
    setFile([]);
  };

  const getIndicesOfNonZeroNonNull = (array) => {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0 && array[i] !== null && array[i] !== undefined && array[i] !== '') {
        indices.push(i);
      }
    }
    return indices;
  };

  const confirmPhotos = () => {
    const filteredFile = file ? file.filter(item => item) : [];
    if (filteredFile.length !== file.length) {
      setFile(filteredFile);
    }
  };

  const renderImage = (index) => {
    let lastTap = null;
    const handlePress = () => {
      const now = Date.now();
      const DOUBLE_PRESS_DELAY = 300;
      if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
        removeFile(index);
      } else {
        lastTap = now;
      }
    };
    return (
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{ uri: (file.length > 0 && file[index]?.uri) || (photos && photos[index] )}}
          style={{ width: 150, height: 150, borderRadius: 30, contentFit: 'contain', margin: 5 }}
        />
      </TouchableOpacity>
    );
  };

  const renderEmptyPlaceholder = (index) => {
    return (
      <TouchableOpacity onPress={() => pickImage(index)}>
        <View style={[styles.emptyView, styles.emptyPlaceholder]} >
          <Ionicons name="add" size={32} color="black"  />
          <Text style={{ position: 'absolute', bottom: 15, left: 15, fontWeight: 'bold' }}>{index + 1}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  

  return (
    <View className='flex-1 justify-center items-center p-10'>
      <View style={styles.container}>
        {Array.from({ length: 7 }).map((_, index) => (
          <View key={index} style={styles.imageContainer}>
            {file[index] ? renderImage(index) : renderEmptyPlaceholder(index)}
          </View>
        ))}
      </View>
      <View style={[styles.container, { flexWrap: 'nowrap', padding: 5 }]}>
        <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginRight: 10 }}>
          <Button title='clear all photos' onPress={resetImages} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginLeft: 10 }}>
          <Button title='confirm change' onPress={onHandleConfirm} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginLeft: 10 }}>
          <Button title='back' onPress={() => router.back()} />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 30, // Adjust as needed
  },
  imageContainer: {
    width: '30%', // Adjust as needed
    height: 150, // Adjust as needed
    margin: 10, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  emptyView: {
    width: 150,
    height: 150,
    borderRadius: 30,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyPlaceholder: {
    backgroundColor: '#FED7D7',
  },
});

export default Photos;
