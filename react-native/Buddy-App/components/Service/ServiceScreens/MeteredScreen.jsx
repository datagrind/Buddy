import { Text, Box, Slider, VStack } from "native-base";
import React, { useEffect, useState } from "react";

const MeteredScreen = () => {
  const rate = 50;
//   const [onChangeValue, setOnChangeValue] = useState(2);
  const [hours, setHours] = useState(2);
  const [price, setPrice] = useState(hours*rate);

//   const hour = {
//     '1': 0,
//     '2': 12.5,
//     '3': 25,
//     '4': 37.5,
//     '5': 50,
//     '6': 62.5,
//     '7': 75,
//     '8': 87.5,
//   };

//   const calculatePriceHour = () => {
//     if (hours === 8) {
//       setPrice(hours * rate);
//     } else if (hours === 7) {
//       setPrice(hours * rate);
//     } else if (hours === 6) {
//       setPrice(hours * rate);
//     } else if (hours === 5 ) {
//       setPrice(hours * rate);
//     } else if (hours === 4 ) {
//       setPrice(hours * rate);
//     } else if (hours === 3) {
//       setPrice(hours * rate);
//     } else{
//       setPrice(hours * rate);
//     }
//   };

  useEffect(()=>{
    setPrice((hours/12.5) * rate)
  },[hours])

  return (
    <>
      <Box alignItems="center" w="100%" h={200} >
        <VStack space={4} alignItems="center" w="75%" maxW="300">
          <Text textAlign="center">{hours/12.5} hrs</Text>
          <Text textAlign="center">${price}</Text>
          <Slider
            size="lg"
            w={300}
            minValue={25}
            value={hours}
            onChange={(v) => {
              setHours(v);
            }}
            max={8}
            min={2}
            step={12.5}
            colorScheme="red"
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </VStack>
      </Box>
    </>
  );
};

export default MeteredScreen;
