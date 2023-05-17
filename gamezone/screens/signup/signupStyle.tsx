import { StyleSheet } from "react-native";


const signupStyles = StyleSheet.create({
    container: {
        width: 'auto',
        backgroundColor: '#ddd',
        marginHorizontal:10,
    },
    form: {
        borderRadius: 5,
        borderStyle: 'dotted',
        marginHorizontal:20,
        width: '90%',
        backgroundColor: 'coral',
        padding:10
    },
    input: {
        height: 40,
        width:'80%',
        marginBottom: 10,
        marginHorizontal:30,
        backgroundColor: '#fff',
    },
    placeholder: {
        height: 25,
        marginHorizontal:30,
    },
    button: {
        width:'50%',
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal:65,
        padding: 5
    }
})

export {signupStyles};