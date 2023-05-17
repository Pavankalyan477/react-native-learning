import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


export default function Home({ navigation }: any) {
    const pressHanlder = () => {
        navigation.navigate("SignUp");
    }
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="SignUp" onPress={pressHanlder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:30
    }
})