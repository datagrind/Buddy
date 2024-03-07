import { 
    Image, 
    Text, 
    Button, 
    Stack, 
    Box 
} from "native-base"


const Onboarding2 = () => {

    return (
        <Box h={'100%'} w={'100%'}>
        <Stack h={'30%'} w={'100%'}>
            <Text> Onboarding2 </Text>
            {/* <Image></Image> */}
        </Stack>
        <Stack h={'30%'} w={'100%'} p={5}>
            <Box h={'25%'} w={'100%'}>
                <Text> Respectful Relationships </Text>
                <Text> Buddies committed to treating you with kindness and respect. </Text>
                <Button onPress={() => console.log("hello world")}>Next</Button>
            </Box>
        </Stack>
    </Box>
    )

}

export default Onboarding2