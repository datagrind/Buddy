import { View, Text } from "react-native"
import { useState } from "react";
import getUsers from "../../logic/getUser";

const Likes = () => {
    const [likes, setLikes] = useState()
    return (
        <>
            <View>
                <Text>Wants to be your Buddy</Text>
            </View>
            <View>
                <Text>Accept or Deny</Text>
            </View>
        </>
    )
}

export default Likes;