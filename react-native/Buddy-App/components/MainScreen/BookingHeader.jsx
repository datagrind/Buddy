import { HStack, Divider, Text, Box } from "native-base";
// import SearchBar from "./SearchBar";

import { Platform } from "react-native";

const Bookingheader = ( { searchHubPath }) => {

    const isIos = Platform.OS === 'ios'

    return (<>
        <HStack top={-15} h={100} borderWidth={0} mt={isIos ? 0:0} mb={isIos ? 0:5} px={10}  display={'flex'} alignItems={'center'} justifyContent={'space-around'} width={'100%'} height={50} backgroundColor={'white'} borderRadius={10}  divider={<Box h={7} px="2" >
        <Divider bg="grey" thickness="2" mx="2" orientation="vertical" />
        </Box>}>
                <Text pt={isIos ? 2 : 1}  textAlign={'center'} fontSize={22} >Booking</Text>
        </HStack>
    </>);
};

export default Bookingheader