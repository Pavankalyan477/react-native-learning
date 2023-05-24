import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsSlice } from "../store/productsSlice";
import  Icon  from "react-native-vector-icons/FontAwesome";


export default function Products( {navigation} : any) {
    const products = useSelector((state: any) => state.products.products);
    const dispatch = useDispatch();
    const [product, setProduct] = useState('');
    const [fliteredProducts, setFilteredProducts] = useState(products);
    
    const filterProducts = () => {
        if (product.trim() === '') {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(products.filter((prod: any) => 
                prod.name.toLowerCase().includes(product.toLowerCase())));
        }
    }
    return(
        <>
        <View style={{flexDirection:'row'}}>
            < TextInput  style={styles.searchInput} placeholder="Search Product"
            onChangeText={(text) => setProduct(text)}/>
            <Icon name="search" size={35} color={'#428AF8'} style={{margin:8}} onPress={filterProducts}/>
        </View>
        <FlatList
            data={fliteredProducts}
            renderItem={({ item }) => {
                return (
                <Pressable onPress={() =>{
                    dispatch(ProductsSlice.actions.setSelectedProduct(item.id));
                     navigation.navigate("Product Details")}}
                     style={styles.itemContainer}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                    <Text style={{alignSelf:"center"}}>{item.name}</Text>
                </Pressable>)
            }}
            numColumns={2}
        />
        </>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding:1
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        margin:5,
        padding: 3,
        width: '80%',
        borderColor:'blue',
        flexDirection:'row'
    },
})