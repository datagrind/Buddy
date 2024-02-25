import { ScrollView, Animated } from 'react-native';
import { Box, Text, NativeBaseProvider } from 'native-base';
import React, { useRef } from 'react';


const HideHeader = ({hTY}) => {
  

    return (
        <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: [{ translateY: hTY}],
        }}
      />

    )

}

export default HideHeader