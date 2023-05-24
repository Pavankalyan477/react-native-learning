import { useMemo, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice, selectDeliveryPrice,selectTotal } from "../store/cartSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const checkoutCart = (cartItem : any) => {
    return(
        <View>
        <View style={styles.container}>
            <Image source={{ uri: cartItem.product.image }} style={styles.image} />

            <View style={styles.contentContainer}>
                <Text style={styles.name}>{cartItem.product.name}</Text>
                <Text>Qunatity: {cartItem.quantity}</Text>
                <Text>Price: {cartItem.quantity * cartItem.product.price} /-</Text>
            </View>
        </View>
        </View>
    )
}

const ShoppingCartTotals = () => {
    const total = useSelector(selectTotal);
    return(
        <View style={styles.totalsContainer}>
            <Text style={styles.sideHeading}>Price Summary:</Text>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total Price</Text>
        <Text style={styles.textBold}>Rs.{total} /-</Text>
      </View>
    </View>
    )
}

const Checkout = ({navigation}: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cartItems = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState<string | undefined>('1');
    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1', 
            label: 'Kukatpalli Hyderabad,Hyderabad, Telangana, 500045 India Phone Number: 9608745251',
            value: 'Kukatpalli Hyderabad,Hyderabad, Telangana, 500045 India Phone Number: 9608745251'
        },
        {
            id: '2',
            label: 'Kamala Prasanna Nagar Allwyn Colony,Kukatpalli, Near ISCKON Temple Hyderabad, Telangana, 500018 IndiaPhone Number: 9234567899',
            value: 'Kamala Prasanna Nagar Allwyn Colony,Kukatpalli, Near ISCKON Temple Hyderabad, Telangana, 500018 IndiaPhone Number: 9234567899'
        }
    ]), []);

    const orderPlace = () => {
        setIsLoading(true);
        setTimeout(() => {
            Alert.alert('Order Placed Successfully');
            setIsLoading(false)
            navigation.navigate('Products');
            dispatch(cartSlice.actions.clearCartItems([]));
        }, 1000)
    }
    return(
        <ScrollView >
            {/* <View style={styles.row}> */}
                <Text style= {styles.details}>ORDER DETAILS</Text>
                
            {/* </View> */}
            <Text style={styles.sideHeading}>Delivery Address:</Text>
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={setSelectedId}
                selectedId= {selectedId}
            />
            <Text style={styles.sideHeading}>Order Summary:</Text>
            <View style={{marginBottom:'15%'}}>
                {cartItems.map((item : any) => {
                    return(
                        checkoutCart(item)
                    )
                })}
                {/* <FlatList
                    data={cartItems}
                    renderItem={({ item }) => checkoutCart(item)}
                    ListFooterComponent={ShoppingCartTotals}
                /> */}
                <ShoppingCartTotals/>

            </View>
            <View style={{ justifyContent:'center', position:'absolute', marginVertical: '50%', marginHorizontal: '50%'}}>
                {isLoading && <ActivityIndicator  size={150} color={'blue'}/>}
            </View>
            <Pressable onPress={orderPlace}  style={styles.button}>
                <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>
       </ScrollView >
    )
}

const styles = StyleSheet.create({
    details: {
        fontSize: 20,
        fontWeight:'bold',
        // padding:5,
        marginHorizontal:'25%',
        textDecorationLine: 'underline',
    },
    button: {
        position:'absolute',
        backgroundColor: 'black',
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        bottom:10,
        borderRadius: 100,
        alignItems: 'center',
    },
    sideHeading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 30,
    marginTop:30
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Checkout;