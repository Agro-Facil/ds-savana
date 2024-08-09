import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CarouselItem = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <View style={styles.itemContainer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarouselItem;
