import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import products from "../data/products";

const ProductDetails = () => {
  const product = products[0];

  const {width} = useWindowDimensions();
  const AddToCart = () => {
    console.warn('added')
  }
 
  return (
    <View>
        <ScrollView>    
      {/* Image Carousel */}
      <FlatList
      data={product.images}
      renderItem={({ item }) => 
      <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />}
      horizontal
      showsHorizontalScrollIndicator = {false}
      pagingEnabled
      />

      
        <View style={{ padding: 20 }}>
          {/* Title */}
                <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
                <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
                <Text style={styles.description}>{product.description}</Text>
            </View>
        </ScrollView>

        <Pressable onPress={AddToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
     

      {/* Add to cart button */}

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },

  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ProductDetails;