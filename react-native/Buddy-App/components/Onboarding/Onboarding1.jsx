import { 
    Image, 
    Text, 
    Button, 
    Stack, 
    Box 
} from "native-base"


const Onboarding1 = () => {

    return (
        <Box h={'100%'} w={'100%'}>
            <Stack h={'30%'} w={'100%'}>
                <Text> Onboarding1 </Text>
                <Image></Image>
            </Stack>
            <Stack h={'30%'} w={'100%'} p={5}>
                <Box h={'25%'} w={'100%'}>
                    <Text> Discover Great Connections</Text>
                    <Text> Explore a diverse community of Buddys ready to offer unique experiences. </Text>
                    <Button onPress={() => console.log("hello world")}>Next</Button>
                </Box>
            </Stack>
        </Box>

    )

}

export default Onboarding1