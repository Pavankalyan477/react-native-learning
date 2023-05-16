import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";
import { Signup } from "../screens/signup/signup";


const Stack = createNativeStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
    </Stack.Navigator>
  );
}

export default function HomeStack() {
    return(
            <MyStack/>
    )
}