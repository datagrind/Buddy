// SwipeableCard.js

import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import {  Box, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';


const SwipeableCard = ({ card, login, name }) => {

  const navigation = useNavigation()

  const textTitles = {
    card1: {
        title: 'Discover Great Connections',
        subtitle: 'Explore a diverse community of Buddys ready to offer unique experiences',

    },
    card2: {
        title: 'Respectful Relationships',
        subtitle: 'Buddys committed to treating you with kindness and respect',

    },
    card3: {
        title: 'Connect with Confidence',
        subtitle: 'Every Buddy you meet undergoes a thorough background check, ensuring a secure and confident experience',

    },
  }

  const handleLogin = () => {
    login(name)
  }

  

  return (
      <Box style={styles.card}>
        <Image style={styles.cardImage} source={require('../../assets/93-930424_bring-a-friend-day-march-31-2017-western.png')} ></Image>
        <Text style={styles.title}>{textTitles[card].title}</Text>
        <Text style={styles.subtitle}>{textTitles[card].subtitle}</Text>
        { card === 'card3' && <Box h={75} w={75} justifyContent={'center'} alignItems={'center'}>
            <Button onPress={handleLogin} width={100} backgroundColor={'red.600'}>Next</Button>
        </Box> }
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '135%',
    // height: '50%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 0,
    marginVertical: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // elevation: 5,
    position: 'absolute',
    zIndex: 0,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    overflow: 'visible',
    width: '125%',
    textAlign: 'center',
    margin: 5,
  },
  subtitle: {
    fontSize: 16,
    margin: 5,
    width: '60%',
    textAlign: 'center',
  },
  cardImage: {
    height: 290, // Set your desired height
    width: '70%', // Take the full width of the parent container
    resizeMode: 'cover', // Adjust the resizeMode as needed
    borderRadius: 10, // Apply border radius if needed
    margin: 5,
  },
});

export default SwipeableCard;
