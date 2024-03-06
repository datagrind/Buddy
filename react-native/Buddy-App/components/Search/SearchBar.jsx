import React from "react";
import { VStack, Input, Icon, Heading } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


function SearchBar() {
  return <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
      </VStack>
}

export default SearchBar