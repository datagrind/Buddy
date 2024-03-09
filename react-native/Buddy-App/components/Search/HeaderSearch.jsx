import { HStack, Pressable, Divider, Text, Box, Stack } from "native-base";
// import SearchBar from "./SearchBar";

import { Platform } from "react-native";

const HeaderSearchHub = ( { handlePress, searchHubPath }) => {

    const isIos = Platform.OS

    return (<>
        <HStack h={100} borderWidth={0} mt={isIos ? 0:50} px={10} pt={0} justifyContent={'space-around'} width={'100%'} divider={<Box h={10} px="2">
        <Divider bg="grey" thickness="2" mx="2" orientation="vertical" />
        </Box>}>
            <Pressable borderWidth={2} h={50} w={100} >
                <Text onPress={() => handlePress('search')} textAlign={'center'} fontSize={22} color={searchHubPath === 'search' ? 'black' : 'grey'}>Search</Text>
            </Pressable>
            {/* <Box>
                <Text fontSize={30} > | </Text>
            </Box> */}
            <Pressable h={50} w={100} borderWidth={2} >
                <Text onPress={() => handlePress('requests')} textAlign={'center'} fontSize={22} color={searchHubPath === 'requests' ? 'black' : 'grey'}>Requests</Text>
            </Pressable>
        </HStack>
        {/* { searchHubPath === 'search' &&
            <Stack p={3}>
                <SearchBar />
            </Stack>
        } */}
    </>);
};

export default HeaderSearchHub