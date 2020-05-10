import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import ImageOne from '../../assets/competition-one.png';
import ImageTwo from '../../assets/competition-two.png';

//i have the images.... i can that from assets
//i need to add a safe area... so that that guy doesn't blow above
// the top
//once i have done that i need to get a flatlist  and append data
// for each item in thatt list
// lastly i can add a background color

const images = [ImageOne, ImageTwo]

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d725',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d727',
    title: 'Third Item',
  },
];




export default function Competitions() {
  function getRandomArbitrary(min, max) {
    let rukee = Math.random() * (max - min) + min
    console.log(Math.ceil(rukee))
    return Math.ceil(rukee);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={(props) => (
          <View
          style={{
            alignItems:'center',
            backgroundColor:"white",
  
          }}
          >

          <View style={{
            width:'90%',
            height:161,
            marginTop:20
          }}>
            <Image
              source={ImageOne}
              style={{
                width: '100%',
                height:'100%'
              }}
            />
          </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = {
  container: {},
};

