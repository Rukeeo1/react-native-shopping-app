import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

//  icons
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import * as cartActions from '../../store/actions/cart';

const ProductOverviewScreen = (props) => {
  const { availableProducts: products } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 15 }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      ),

      headerRight: () => (
        <View style={{ paddingRight: 15 }}>
          <Entypo
            name="shopping-cart"
            size={24}
            color="black"
            onPress={() => props.navigation.navigate('Cart Screen')}
          />
        </View>
      ),
    });
  });

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() =>
            props.navigation.navigate('Product Details', {
              productId: itemData.item.id,
              title: itemData.item.title,
            })
          }
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
            props.navigation.navigate('Cart Screen', {
              productId: itemData.item.id,
              title: itemData.item.title,
            });
          }}
        />
      )}
    />
  );
};
{
  /* <Text>{itemData.item.title}</Text> */
}

export default ProductOverviewScreen;
