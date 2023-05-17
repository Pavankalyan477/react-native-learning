import { Alert, FlatList, Text, View } from "react-native"
import SignupUI from "./signupUI"
import axios from "axios";
import { useEffect, useState } from "react";

interface role {
  id:number,
  name: string
}

const Signup = () => {
  const [msg, setMsg] = useState<string>('');

  const signupUser = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/sign-up', data);

      setMsg("login");
    } catch(err: any) {
      console.log(err.message)
    }
  }

  const loginUser = async (data: any) => {
    console.log(data)
    const response = await axios.post('http://localhost:8080/auth/login', data);

    console.log(response)
  }
  useEffect(() => {
    setMsg("signup")
  }, [])
    return(
        <View>
            <SignupUI signupUser = {signupUser} loginUser={loginUser} message = {msg}/>
        </View>
    )
}

export { Signup };