import { 
    Image, 
    Text, 
    Button, 
    Stack, 
    Box 
} from "native-base"


const Onboarding3 = () => {

    return (
        <Box h={'100%'} w={'100%'}>
        <Stack h={'30%'} w={'100%'}>
            <Text> Onboarding3 </Text>
            <Image></Image>
        </Stack>
        <Stack h={'30%'} w={'100%'} p={5}>
            <Box h={'25%'} w={'100%'}>
                <Text> Connect with Confidence </Text>
                <Text> Every Buddy you meet undergoes a thorough background check, ensuring a secure and confident experience. </Text>
                <Button onPress={() => console.log("hello world")}>Next</Button>
            </Box>
        </Stack>
    </Box>
    )

}

export default Onboarding3