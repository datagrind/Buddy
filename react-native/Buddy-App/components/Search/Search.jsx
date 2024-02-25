import Card from '../Profile/Card'
import { 
    ScrollView,
    VStack,
    useTheme, 
    NativeBaseProvider,
    Center,
    HStack,
} from "native-base";
import { Animated } from 'react-native';
import { getUsers } from "../../logic/getUsers";
import { useState,useEffect, useRef } from "react";



const Search = () => {
    const [user, setUser] = useState([])

    const fetchData = async () => {
        try {
          const retrievedUser = await getUsers(5);
          setUser(retrievedUser.results);
        } catch (error) {
          console.error('Error:', error);
      
          // Check if the error is due to rate-limiting (status code 429)
          if (error.response && error.response.status === 429) {
            // Implement retry logic after a certain delay (e.g., 5 seconds)
            console.log('Retrying after 5 seconds...');
            setTimeout(() => {
              fetchData();
            }, 5000);
          }
        }
      };
    useEffect( () => {
        fetchData()
    }, [])


    return <ScrollView 
            w={"100%"} 
            h="100%" 
            borderRadius='30'
            borderWidth={2}
            zIndex={1}
            overflow={'hidden'}
            showsVerticalScrollIndicator={false}
        >  
            {
                user.map((person, index) => {
                    return(
                        <VStack key={index} space={2} style={{ marginTop: 15 }}>
                            <Card img={person}/>
                        </VStack>
                    )
                })
            }
    </ScrollView>
}

export default () => {
    return (
        <NativeBaseProvider>
        <Center flex={1} px="3">
            <Search />
        </Center>
        </NativeBaseProvider>
    );
};