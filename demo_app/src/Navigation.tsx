import { NavigationContainer } from "@react-navigation/native"
import Products from "./screens/products"
import ProductDetails from "./screens/productDetails"
import ShoppingCart from "./screens/ShopppingCart"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Pressable, Text } from "react-native"
import { useSelector } from "react-redux"
import {  selectNumberOfItems } from "./store/cartSlice"
import Checkout from "./screens/checkout"


const Stack = createNativeStackNavigator();

const Navigation = () => {
     const numberOfItems = useSelector(selectNumberOfItems);
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen 
                name="Products" 
                component={Products}
                options= {({ navigation }) => ({
                    headerRight: () => (
                    <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: 'row'}}>
                        <Text>Cart
                        </Text>
                        <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
                    </Pressable>
                    )
                })}
                />
                <Stack.Screen 
                    name="Product Details"
                    component={ProductDetails}
                    options= {({ navigation }) => ({
                    headerRight: () => (
                    <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: 'row'}}>
                        <Text>Cart</Text>
                        <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
                    </Pressable>
                    ),
                    presentation: 'modal'
                })}
                />
                <Stack.Screen name="Cart" component={ShoppingCart}/>
                <Stack.Screen name="Checkout" component={Checkout}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;