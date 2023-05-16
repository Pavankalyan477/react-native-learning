import { StyleSheet, Text, View, Button } from "react-native";


export default function ReviewDetail({ navigation }) {
    const pressHandler = () => {
        navigation.navigate("Home");
    }
    return(
        <View style={styles.container}>
            <Text>ReviewDetail Screen</Text>
            <Button title="Go HOME" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:30
    }
})