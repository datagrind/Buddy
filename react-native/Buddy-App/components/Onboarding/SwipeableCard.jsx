// SwipeableCard.js

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {  Box, Button } from 'native-base';



const SwipeableCard = ({ card, doneSwipe, name, username }) => {

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


  

  return (
      <Box style={styles.card}>
          <Text style={styles.title}>{textTitles[card].title}</Text>
          <Text style={styles.subtitle}>{textTitles[card].subtitle}</Text>
          { card === 'card3' && <Box h={75} w={75} justifyContent={'center'} alignItems={'center'}>
              <Button onPress={doneSwipe} width={100} backgroundColor={'red.600'}>Next</Button>
          </Box> }
      </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '135%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
