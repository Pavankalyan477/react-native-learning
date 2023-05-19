import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import products from "../data/products";
import { useEffect, useState } from "react";


export default function LandingPage( {navigation} : any) {
    return(
       
        <FlatList
            data={products}
            renderItem={({ item }) => {
                return (
                <Pressable onPress={() => navigation.navigate("Product Details")} style={styles.itemContainer}>
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