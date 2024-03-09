
import { Text, Box, Button, Checkbox, Slider, Stack } from "native-base";
import { useEffect, useState } from "react";


const MeteredScreen = () => {

    const [onChangeValue, setOnChangeValue] = useState(20);
    const [hours, setHours] = useState(2)
    const [price, setPrice] = useState(50)
    const rate = 50
    const hour = {
        '1': 0,
        '2': 12.5,
        '3': 25,
        '4': 37.5,
        '5': 50,
        '6': 62.5,
        '7': 75,
        '8': 87.5,
    }
    const calculatePriceHour = () => {

        if (onChangeValue >= hour[8]){
            setHours(8)
            setPrice(hours*rate)
        } else if (onChangeValue >= hour[7] < hour[8]){
            setHours(7)
            setPrice(hours*rate)
        } else if (onChangeValue >= hour[6] < hour[7]){
            setHours(6)
            setPrice(hours*rate)
        } else if (onChangeValue >= hour[5] < hour[6]){
            setHours(5)
            setPrice(hours*rate)
        } else if (onChangeValue >= hour[4] < hour[5]){
            setHours(4)
            setPrice(hours*rate)
        } else if (onChangeValue >= hour[3] < hour[4]){
            setHours(3)
            setPrice(hours*rate)
        } else if (onChangeValue >= hour[2] < hour[3]){
            setHours(2)
            setPrice(hours*rate)
        }
    }

    useEffect(() => {
        calculatePriceHour()
    },[onChangeValue])
    
    return <>
        <Box alignItems="center" w="100%">
            <Stack space={4} alignItems="center" w="75%" maxW="300">
                <Text textAlign="center">{hours} hrs</Text>
                <Text textAlign="center">${price}</Text>
                <Slider defaultValue={25} minValue={25} colorScheme="red" onChange={v => {
                setOnChangeValue(Math.floor(v));
            }}>
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
                </Slider>
            </Stack>
        </Box>
    </>
}

export default MeteredScreen