import { ActivityIndicator, Alert, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";
import { useState } from "react";

const ProductDetails = () => {
  const product = useSelector((state: any) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const {width} = useWindowDimensions();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const AddToCart = () => {
    setIsLoading(true);
    // setModalVisible(true)
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Item Succeccfully added to cart");
      dispatch(cartSlice.actions.addCartItem({product}));
    }, 300);
    

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
        <View style={{ justifyContent:'center', position:'absolute', marginVertical: '50%', marginHorizontal: '50%'}}>
            {isLoading && <ActivityIndicator  size={150} color={'blue'}/>}
        </View>

        <Pressable onPress={AddToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[ styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ProductDetails;