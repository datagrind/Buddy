import React from 'react';
import { ScrollView, VStack, Center, HStack, Stack } from 'native-base';
import ImageCard from '../Profile/ImageCard';



const Search = ( { users }) => {

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
        h: 300,
      };

      renderedCards.push(
        <HStack space={3} {...hStackStyles} key={i}>
          <Center flex={1} >
              <ImageCard img={users[i]} status={'VERIFIED'}  />
          </Center>
          {!isLastCard && (
            <Center flex={1}>
                <ImageCard img={users[i + 1]} status={'SUPERHOST'}   />
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
      <ScrollView w="100%" h="100%" showsVerticalScrollIndicator={false}>
        <VStack space={5} alignItems="flex-start">
          {renderTwoCardsPerRow()}
          <Stack w={'100%'} h={300}></Stack>
        </VStack>
      </ScrollView>
    </Center>
  );
};

export default Search;
