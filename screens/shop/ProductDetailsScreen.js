import React from 'react';
import {
  ScrollView,
  Image,
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/colors'

const ProductDetailsScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  return (
    <ScrollView>
      {/* <TouchableHighlight onPress={() => navigation.navigate('Test Input')}>
        <View>
          <Text>Product Details Screen</Text>
          <Text>{selectedProduct.title}</Text>
        </View>
      </TouchableHighlight> */}
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <Button color={Colors.primary} title="Add to Cart" onPress={() => {}}/>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height:300
  },
  price: {
    fontSize:20,
    color: '#888',
    textAlign:'center',
    marginVertical:20
  },
  description: {
    fontSize:14,
    textAlign:'center'
  }

});

export default ProductDetailsScreen;
