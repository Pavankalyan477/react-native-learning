import { NavigationContainer } from "@react-navigation/native"
import LandingPage from "./screens/LandingPage"
import ProductDetails from "./screens/productDetails"
import ShoppingCart from "./screens/ShopppingCart"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Pressable, Text } from "react-native"
// import {FontAwesome5} from "react-native-vector-icons"

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{contentStyle:{backgroundColor: 'white'}}}>
                <Stack.Screen 
                name="Products" 
                component={LandingPage}
                options= {({ navigation }) => ({
                    headerRight: () => (
                    <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: 'row'}}>
                        <Text>Cart</Text>
                        <Text style={{ marginLeft: 5, fontWeight: '500' }}>1</Text>
                    </Pressable>
                    )
                })}
                />
                <Stack.Screen 
                    name="Product Details"
                    component={ProductDetails}
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen name="Cart" component={ShoppingCart}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;