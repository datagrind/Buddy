import React from 'react';
import { ScrollView, VStack, Center, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import ImageCard from '../Profile/ImageCard';
import { getUsers } from '../../logic/getUsers';
import { useState, useEffect } from 'react';


const Search = ( { handleSetPath }) => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const retrievedUser = await getUsers(11);
      setUsers(retrievedUser.results);
    } catch (error) {
      console.error('Error:', error);

      if (error.response && error.response.status === 429) {
        console.log('Retrying after 5 seconds...');
        setTimeout(() => {
          fetchData();
        }, 5000);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTwoCardsPerRow = () => {
    const renderedCards = [];
    const totalUsers = users.length;

    for (let i = 0; i < totalUsers; i += 2) {
      const isLastCard = i + 1 === totalUsers;

      const hStackWidth = isLastCard ? '100%' : '100%';
      const hStackJustifyContent = isLastCard ? 'flex-start' : 'center';
      const hStackStyles = {
        width: hStackWidth,
        justifyContent: hStackJustifyContent,
        alignItems: 'flex-start',
        marginLeft: isLastCard ? 0 : 'auto', 
        aspectRatio: 1,
      };

      renderedCards.push(
        <HStack space={3} {...hStackStyles} borderWidth={2} key={i}>
          <Center flex={1}>
            <TouchableOpacity w='100%' h='100%' onPress={ () => handleSetPath('profiledetails', users[i])}>
              <ImageCard img={users[i]} status={'AVAILABLE'} />
            </TouchableOpacity>
          </Center>
          {!isLastCard && (
            <Center flex={1}>
              <TouchableOpacity onPress={ () => handleSetPath('profiledetails', users[i +1 ])}>
                <ImageCard img={users[i + 1]} status={'AVAILABLE'} />
              </TouchableOpacity>
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

  return (
    <Center flex={1} px="3" w="100%">
      <ScrollView w="100%" h="100%" borderRadius={30} showsVerticalScrollIndicator={false}>
        <VStack space={5} alignItems="center">
          {renderTwoCardsPerRow()}
        </VStack>
      </ScrollView>
    </Center>
  );
};

export default Search;
