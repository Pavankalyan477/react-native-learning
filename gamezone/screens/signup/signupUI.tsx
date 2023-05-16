import { Button, Text, TextInput, View } from "react-native";
import { signupStyles } from "./signupStyle";

export default function SignupUI() {
    return(
        <View style={signupStyles.container}>
            <Text>User Name:</Text>
            <TextInput
            style={signupStyles.input}
            value= 'hii'
            placeholder="Enter User Name"/>
            
            <Text>Email:</Text>
            <TextInput
            style={signupStyles.input}
            value= 'kl'
            placeholder="Enter User Name"/>
            
            <Text>Password:</Text>
            <TextInput
            style={signupStyles.input}
            value= 'jbh'
            placeholder="Enter User Name"/>

            <View>
                <Button title="Create"/>
            </View>
        </View>
    )
}