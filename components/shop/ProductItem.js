import React from 'react';
import Colors from '../../constants/colors';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

// export default class IconExample extends React.Component {
//   render() {
//     return (
//       <Ionicons name="md-checkmark-circle" size={32} color="green" />
//     );
//   }
// }

const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageCount}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 3,
                fontSize: 18,
                fontWeight: 900,
              }}
            >
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.accent}
                title="Add To Cart"
                onPress={props.onAddToCart}
              />

            </View>
          </View>
        </TouchableCmp>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5, //shadows don't work for android devices to we use elevation instead
    height: 300, //we could make this dynamic as we learnt in the responsive module..
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageCount: {
    width: '100%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  title: {
    // fontFamily:'open-sans-bold',
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
    // fontFamily:'open-sans-bold'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
    paddingHorizontal: 20,
  },
});

export default ProductItem;
