import React, { useState, useEffect, useReducer } from 'react';
import { Box, Divider, View, ScrollView, VStack, Center, HStack, Stack, Spinner, Text} from 'native-base';
import { Platform } from 'react-native';
import ImageCard from '../Profile/ImageCard';
import {Menu, MenuItem, MenuItemLabel, Button, ButtonText} from '@gluestack-ui/themed'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const filteredReducer = (state, action) => {
  switch(action.type){
    case 'ADDFILTEREDDATATEST':
      return { filteredDataTest: action.payload, selectedCategory: state.selectedCategory }
    case 'ADDSELECTEDCATEGORY':
      return { filteredDataTest: state.filteredDataTest, selectedCategory: action.payload }
    default:
      return state
  }
}


const Search = ({ users }) => {

  // const [filteredDataTest, setFilteredDataTest] = useState(['all', 'male', 'female',])
  // const [selectedCategory, setSelectedCategory] = useState(filteredDataTest[0]);
  const [state, dispatch] = useReducer(filteredReducer, { filteredDataTest: ['all', 'male', 'female',], selectedCategory: 'all' })
  const [filteredData, setFilteredData] = useState(users);
  const [isLoad, setIsLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isIos = Platform.OS === 'ios'

  const handleFilterChange = (category) => {
    setIsLoad(true);
    // setSelectedCategory(category);
    dispatch({ type: 'ADDSELECTEDCATEGORY', payload: category})
    if (category === 'all') {
      setFilteredData(users);
    } else {
      const filteredItems = users.filter((item) => item.gender === category);
      setFilteredData(filteredItems);
    }
    setIsOpen(false); // Close the menu after selecting an option
  };

  const renderTwoCardsPerRow = () => {
    const renderedCards = [];
    const totalUsers = filteredData.length || users.length;

    for (let i = 0; i < totalUsers; i += 2) {
      const isLastCard = i + 1 === totalUsers;

      const hStackWidth = isLastCard ? '100%' : '100%';
      const hStackJustifyContent = isLastCard ? 'flex-start' : 'center';
      const hStackStyles = {
        width: hStackWidth,
        justifyContent: hStackJustifyContent,
        alignItems: 'flex-start',
        marginLeft: isLastCard ? 0 : 'auto',
        h: 300,
      };

      renderedCards.push(
        <HStack space={3} {...hStackStyles} key={i}>
          <Center flex={1}>
            <ImageCard img={filteredData[i] || users[i]} status={'VERIFIED'} />
          </Center>
          {!isLastCard && (
            <Center flex={1}>
              <ImageCard img={filteredData[i + 1] || users[i + 1]} status={'SUPERHOST'} />
            </Center>
          )}
          {isLastCard && totalUsers % 2 !== 0 && (
            <Center flex={1}>
              <ImageCard img={null} />
            </Center>
          )}
        </HStack>
      );
    }

    return renderedCards;
  };

  useEffect(() => {

    // dispatch({type: 'ADDSELECTEDCATEGORY', payload: state.selectedCategory})
    // dispatch({type: 'ADDFILTEREDDATATEST', payload: state.filterdedDataTest})
    setTimeout(() => {
      setIsLoad(false); // Set loading to false after the operation is complete
    }, 1000);
  }, [handleFilterChange]);

  return (
    <Center flex={1} px="3" w="100%"  borderWidth={0} top={isIos ? 5 : 0}   >
      <View  borderWidth={0}  m={5} w="100%" top={3}>
        <HStack style={{backgroundColor:'white', borderRadius: 10, height: 50, width: '100%', marginBottom: 5, top: 0, borderWidth: 2, padding: 10,}} divider={<Box h={7} px="2" >
          <Divider bg="grey" thickness="2" mx="2" orientation="vertical" />
        </Box>}>
          <Text style={{ paddingTop: (isIos ? 0 : 5),textAlign: 'center', width: 260,  fontSize: 18, }}>{state.selectedCategory}</Text>
          {/* <MaterialCommunityIcons name="tune-variant" size={24} color="black" paddingTop={3} width={50}/> */}
          <Menu
            selectedKeys={state.selectedCategory}
            selectionMode="single"
            // closeOnSelect={true}
            placement="top right"
            onSelectionChange={(keys) => {
              const selectedKey = keys.currentKey; // Get the first selected key
              // setSelectedCategory(selectedKey); // Update selectedCategory state
              dispatch({type: 'ADDSELECTEDCATEGORY', payload: selectedKey})
              handleFilterChange(selectedKey); // Call handleFilterChange with the selected key
            }}
            trigger={(triggerProps) => {
              return (
                <Button {...triggerProps} >
                  <MaterialCommunityIcons name="tune-variant" size={24} color="black" paddingTop={3} width={50}/>
                  {/* <ButtonText style={{ textAlign: 'right', padding: (isIos ? 0 : 0), height: 50, width: 225,fontSize: 16 }}>
                    {state.selectedCategory}
                  </ButtonText> */}
                </Button>
              );
            }}
          >
            {
              state?.filteredDataTest?.map((item) => (
                <MenuItem key={item} textValue={item}>
                  <MenuItemLabel>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItemLabel>
                </MenuItem>
              ))
            }
            {/* <MenuItem key="all" textValue="all">
              <MenuItemLabel size="sm">All</MenuItemLabel>
            </MenuItem>
            <MenuItem key="male" textValue="male">
              <MenuItemLabel size="sm">Male</MenuItemLabel>
            </MenuItem>
            <MenuItem key="female" textValue="female">
              <MenuItemLabel size="sm">Female</MenuItemLabel>
            </MenuItem> */}
          </Menu>
        </HStack>
      </View>
      <View overflow={'hidden'} borderWidth={0}  m={0} w="100%" >
        <ScrollView borderWidth={0} top={0} w="100%" h="100%" showsVerticalScrollIndicator={false}>
          <VStack space={5} alignItems="flex-start" >
            {isLoad ? <Spinner flex={1} alignItems="center" justifyContent="center" size="large" color="red.600" /> : renderTwoCardsPerRow()}
            <Stack w={'100%'} h={300}></Stack>
          </VStack>
        </ScrollView>
      </View>
    </Center>
  );
};

export default Search;
