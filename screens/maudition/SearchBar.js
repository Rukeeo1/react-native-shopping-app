import React, { useRef } from 'react';
import { View, TextInput as Input, StatusBar, Platform } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

// const SearchBar = () => {
//   const isActive = true;
//   return (
//     <View style={styles.container}>
//       {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

//       <Input
//         placeholder="Search"
//         placeholderTextColor="#666666"
//         style={styles.input}
//       />
//     </View>
//   );
// };
const SearchBar = ({ isActive, setIsActive }) => {
  const textInputReference = useRef();

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      {isActive && (
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => {
            textInputReference.current.blur();
            setIsActive(false);
          }}
        />
      )}
      <View style={[styles.searchWrapper, isActive ? { width: '85%' } : null]}>
        {isActive && <EvilIcons name="search" size={24} color="#ccc" />}
        <Input
          placeholder="Search"
          placeholderTextColor="#666666"
          style={styles.input}
          onFocus={() => {
            setIsActive(true);
          }}
          ref={textInputReference}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: 'white',
    height: 85,
    marginTop: 20,
    paddingTop: 20,
    paddingHorizontal: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  searchWrapper: {
    borderColor: '#D3D3D3',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  input: {
    // borderColor: '#D3D3D3',
    // borderRadius: 4,
    // borderWidth: 1,
    // height: 47,
    // width: '95%',
    // alignItems: 'center',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // fontSize: 16,
    height: 47,
    paddingLeft: 5,
    fontSize: 16,
    width: '100%',
  },
};

export default SearchBar;
