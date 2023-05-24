import { NavigationContainer } from "@react-navigation/native"
import Products from "./screens/products"
import ProductDetails from "./screens/productDetails"
import ShoppingCart from "./screens/ShopppingCart"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import {  selectNumberOfItems } from "./store/cartSlice"
import Checkout from "./screens/checkout";
import Icon from 'react-native-vector-icons/FontAwesome';
import {  createDrawerNavigator } from "@react-navigation/drawer"
import DrawerContent from "./DrawerContent"


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const MainStack = () => {
    const numberOfItems = useSelector(selectNumberOfItems);
    return (
    <Stack.Navigator >
                <Stack.Screen 
                name="Products" 
                component={Products}
                options= {({ navigation }) => ({
                    headerRight: () => (
                    <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: 'row'}}>
                        <Icon name="shopping-cart" size={35} color={'gray'}/>
                        <Text style={styles.cart}
                        >{numberOfItems}</Text>
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
                        <Icon name="shopping-cart" size={35} color={'gray'}/>
                        <Text style={styles.cart}>{numberOfItems}</Text>
                    </Pressable>
                    ),
                    presentation: 'modal'
                })}
                />
                <Stack.Screen name="Cart" component={ShoppingCart}/>
                <Stack.Screen name="Checkout" component={Checkout}/>
    </Stack.Navigator>
    )
}

const Navigation = () => {
     
    return(
        <NavigationContainer>
            {/* <Drawer.Navigator initialRouteName="Products" drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="MainStack" component={MainStack} />
            </Drawer.Navigator> */}
            <MainStack/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    cart: {
        marginLeft: 25,
        marginBottom: 25, 
        fontWeight: '500',
        backgroundColor: '#428AF8',
        color:'white',
        width: 20,
        height: 20,
        textAlign: 'center',
        borderRadius: 10,
        position: 'absolute'
    }
})

export default Navigation;