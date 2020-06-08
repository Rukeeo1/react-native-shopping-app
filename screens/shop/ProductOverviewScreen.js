import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart'

const ProductOverviewScreen = (props) => {
  const { availableProducts: products } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch()

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
             dispatch(cartActions.addToCart(itemData.item)) 
             props.navigation.navigate('Cart Screen', {
              productId: itemData.item.id,
              title: itemData.item.title,
            })
             
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
