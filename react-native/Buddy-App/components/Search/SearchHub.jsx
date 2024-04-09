// SearchHub.js
import React from "react";
import { Box } from "native-base";
import Search from "./Search";
import Requests from "../Requests/Requests";

const SearchHub = ({ handleHeader, path, users, requests }) => {

    // console.log(users)

    return (
        <Box w={'100%'} h={'100%'} p={5} borderWidth={0}>
            <Box w={'100%'} h={'100%'} flex={1} >
                {path === 'search' ? <Search users={users && users}  /> : <Requests users={requests && requests} />}
            </Box>
        </Box>
    );
};

export default SearchHub;
