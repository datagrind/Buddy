import { HStack, Pressable, Divider, Text, Box, Stack } from "native-base";
// import SearchBar from "./SearchBar";

const HeaderSearchHub = ( { handlePress, searchHubPath }) => {
    return (<>
        <HStack mt={50} pl={10} pr={10} justifyContent={'space-around'} width={'100%'} divider={<Box h={10} px="2">
        <Divider bg="grey" thickness="2" mx="2" orientation="vertical" />
        </Box>}>
            <Pressable onPress={() => handlePress('search')}>
                <Text fontSize={22} color={searchHubPath === 'search' ? 'black' : 'grey'}>Search</Text>
            </Pressable>
            {/* <Box>
                <Text fontSize={30} > | </Text>
            </Box> */}
            <Pressable onPress={() => handlePress('requests')}>
                <Text fontSize={22} color={searchHubPath === 'requests' ? 'black' : 'grey'}>Requests</Text>
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