import { Text, ActivityIndicator, View } from "react-native"

const SignUpLoad = () => {
    return <View style={{height: '100%', width: '100%', flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text> Signing Up ... </Text>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
}

export default SignUpLoad