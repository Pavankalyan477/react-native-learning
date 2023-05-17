import { Alert, Button, ScrollView, Text, TextInput, View } from "react-native";
import { signupStyles } from "./signupStyle";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id?: number,
  email?: string,
  firstName?: string,
  lastName?: string,
  mobile?: string,
  password?: string
}

export default function SignupUI({signupUser, loginUser, message}: any) {
  const [firstName, setfirstName] = useState<string>('');
  const [lastName, setlastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const submitData = () => {
    const userData: User = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      password: password
    }
    signupUser(userData)
  }

  const loginData = () => {
    const userLogin = {
      email: email,
      password: password
    }

    loginUser(userLogin)
  }

  if (message === "signup") {
    return(
        <View style={signupStyles.container}>
          <Text> SIGN UP </Text>

          <ScrollView>
          <View style={signupStyles.form}>
         
            <Text style={signupStyles.placeholder}>First Name:</Text>
            <TextInput
            style={signupStyles.input}
            value= {firstName}
            placeholder="Enter First Name"
            textContentType="name"
            onChangeText={value => setfirstName(value)}
            />

            <Text style={signupStyles.placeholder}>Last Name:</Text>
            <TextInput
            style={signupStyles.input}
            value= {lastName}
            placeholder="Enter Last Name"
            onChangeText={value => setlastName(value)}
            textContentType="name"/>

            <Text style={signupStyles.placeholder}>Mobile:</Text>
            <TextInput
            style={signupStyles.input}
            value= {mobile}
            placeholder="Enter Mobile Number"
            textContentType="telephoneNumber"
            inputMode="tel"
            onChangeText={value => setMobile(value)}
            keyboardType={'phone-pad'}/>
            
            <Text style={signupStyles.placeholder}>Email:</Text>
            <TextInput
            style={signupStyles.input}
            textContentType="emailAddress"
            keyboardType={'email-address'}
            inputMode="email"
            value= {email}
            onChangeText={value => setEmail(value)}
            placeholder="Enter Email"/>
            
            <Text style={signupStyles.placeholder}>Password:</Text>
            <TextInput
            style={signupStyles.input}
            value= {password}
            onChangeText={value => setPassword(value)}
            placeholder="Enter Password"
            textContentType="password"

            />

            <View style={signupStyles.button}>
                <Button title="Create" onPress={submitData}/>
            </View> 
          </View>
          </ScrollView>
        </View>
    )
  } else {
    return(
      <View style={signupStyles.container}>
          <View style={signupStyles.form}>
            <Text style={signupStyles.placeholder}>Email:</Text>
            <TextInput
            style={signupStyles.input}
            textContentType="emailAddress"
            keyboardType={'email-address'}
            inputMode="email"
            value= {email}
            onChangeText={value => setEmail(value)}
            placeholder="Enter Email"/>
            
            <Text style={signupStyles.placeholder}>Password:</Text>
            <TextInput
            style={signupStyles.input}
            value= {password}
            onChangeText={value => setPassword(value)}
            placeholder="Enter Password"
            textContentType="password"
            />

            <View style={signupStyles.button}>
                <Button title="Login" onPress={loginData}/>
            </View>
          </View>
        </View>
    )
  }
}


