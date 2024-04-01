// SearchHub.js
import React, { useState, useEffect } from "react";
import { Box } from "native-base";
import Search from "./Search";
import Requests from "../Requests/Requests";
import { getUsers } from "../../logic/getUsers";

const SearchHub = ({ handleHeader, path }) => {

    const [users, setUsers] = useState([]);
    const [requests, setRequests] = useState([]);
  
    const fetchDataUsers = async () => {
      try {
        const retrievedUser = await getUsers(11);
        setUsers(retrievedUser.results);
      } catch (error) {
        console.error('Error:', error);
        
        if (error.response && error.response.status === 429) {
          console.log('Retrying after 5 seconds...');
          setTimeout(() => {
            fetchDataUsers();
          }, 5000);
        }
      }
    };

    const fetchDataRequests = async () => {
        try {
          const retrievedUser = await getUsers(11);
          setRequests(retrievedUser.results);
        } catch (error) {
          console.error('Error:', error);
          
          if (error.response && error.response.status === 429) {
            console.log('Retrying after 5 seconds...');
            setTimeout(() => {
              fetchDataRequests();
            }, 5000);
          }
        }
      };
    
    useEffect(() => {
      fetchDataUsers();
      fetchDataRequests();
    }, []);

    // console.log(users)

    return (
        <Box w={'100%'} h={'100%'} p={5}>
            <Box w={'100%'} h={'100%'} flex={1} overflow={'hidden'} borderRadius={30}>
                {path === 'search' ? <Search users={users && users}  /> : <Requests users={requests && requests} />}
            </Box>
        </Box>
    );
};

export default SearchHub;
