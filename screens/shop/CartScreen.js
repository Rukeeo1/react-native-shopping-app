import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Colors from '../../constants/colors';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from '../../store/actions/cart'
import {addOrder} from '../../store/actions/orders'

import CartItem from '../../components/shop/CartItem';

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const state = useSelector((state) => state);


 
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }

    return transformedCartItems.sort((a,b) => a.productId > b.productId ? 1 : -1);
  });

  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>

        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems && cartItems.length === 0}
          onPress={() => {
            dispatch(addOrder(cartItems, cartTotalAmount))
          }

          }
        />
      </View>
      <View>
        <Text>CART ITEMS</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={(itemData) => (
            <CartItem
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              onRemove={() => dispatch(removeFromCart(itemData.item.productId))}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.36,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    // fontFamily:'opens-sans-bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});
