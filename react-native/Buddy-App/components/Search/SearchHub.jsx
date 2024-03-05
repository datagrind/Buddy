// SearchHub.js
import React, { useState } from "react";
import { Box } from "native-base";
import Search from "./Search";
import Requests from "../Requests/Requests";

const SearchHub = ({ handleSetPath, path }) => {

    return (
        <Box w={'100%'} h={'100%'} p={5}>
            <Box w={'100%'} h={'100%'} flex={1} overflow={'hidden'} borderRadius={30}>
                {path === 'search' ? <Search handleSetPath={handleSetPath} /> : <Requests handleSetPath={handleSetPath} />}
            </Box>
        </Box>
    );
};

export default SearchHub;
