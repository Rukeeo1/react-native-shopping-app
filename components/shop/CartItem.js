import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Button,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const CartItem = (props) => {

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}{' '} </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>{props.amount.toFixed(2)}</Text>
        {/* {Platform.OS === 'android' ? <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons name="ios-trash" size={24} color="black" />
        </TouchableOpacity> : <Button title="Remove" color="red" onPress={props.onRemove}/>} */}
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color="red"
            onPress={props.onRemove}
            style={{
              marginLeft: 8
            }}
          />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  quantity: {
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  deleteButton: {
    marginLeft: 20,
  },
});
