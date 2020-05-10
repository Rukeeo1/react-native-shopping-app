import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const Carousel = ({ images }) => {
  const carouselItems = [1, 2, 3, 4, 5];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {carouselItems.map((item, index) => (
        <View
          style={{
            width: 100,
            height: 130,
            backgroundColor: '#FFA500',
            marginRight: 2,
          }}
        >
          <Image
            source={images[index]}
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Carousel;
