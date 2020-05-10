import React from 'react';
import { View, Text } from 'react-native';

const CategoryHeader = ({ categoryName }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryLabelLeft}>{categoryName}</Text>
      <Text style={styles.categoryLabelRigth}>See More</Text>
    </View>
  );
};

const styles = {
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 61,
    paddingTop: 23,
    paddingBottom: 18,
    backgroundColor: '#ffffff',
  },
  categoryLabelLeft: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  categoryLabelRigth: {
    fontSize: 12,
    color: '#000000',
  },
};

export default CategoryHeader;
