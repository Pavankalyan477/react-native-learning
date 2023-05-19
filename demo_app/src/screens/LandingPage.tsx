import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import products from "../data/products";
import { useEffect, useState } from "react";


export default function LandingPage() {
    return(
       
        <FlatList
            data={products}
            renderItem={({ item }) => {
                return (<View style={styles.itemContainer}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                </View>)
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