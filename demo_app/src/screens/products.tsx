import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsSlice } from "../store/productsSlice";


export default function Products( {navigation} : any) {
    const products = useSelector((state: any) => state.products.products);
    const dispatch = useDispatch();
    return(
       
        <FlatList
            data={products}
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
    }
})