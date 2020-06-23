import React, { useEffect } from 'react';
import {
  ScrollView,
  Image,
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Platform,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart';
import Colors from '../../constants/colors';
import { Entypo } from '@expo/vector-icons';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Entypo
            name="shopping-cart"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Cart Screen')}
          />
        </View>
      ),
    });
  });

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Button
        color={Colors.primary}
        title="Add to Cart"
        onPress={() => {
          dispatch(addToCart(selectedProduct));
          navigation.navigate('Cart Screen');
        }}
      />
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    // fontFamily:"open-sans-bold"
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProductDetailsScreen;
