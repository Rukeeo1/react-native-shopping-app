import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = (props) => {
  const { availableProducts: products } = useSelector(
    (state) => state.products
  );



  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => props.navigation.navigate('Product Details', {
            productId:itemData.item.id,
            title:itemData.item.title
          })}
          onAddToCart={(() => {})}
        />
      )}
    />
  );
};
{
  /* <Text>{itemData.item.title}</Text> */
}

export default ProductOverviewScreen;
