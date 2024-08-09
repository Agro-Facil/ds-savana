import React, { PropsWithChildren, useContext, useRef } from 'react';
import { View, Dimensions, StyleSheet, Animated, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import { ContextTheme } from '../../provider';

const { width } = Dimensions.get('window');

const Carousel = ({ children }: PropsWithChildren) => {
  const config = useContext(ContextTheme);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: false }
    )(event);
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={width}
        decelerationRate={0.8}
      >
        {React.Children.map(children, (child, index) => (
          <View key={index} style={{ width }}>
            {child}
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {React.Children.map(children, (_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [config.colors.grayLight!, config.colors.white!, config.colors.grayLight!],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.indicator, { backgroundColor, opacity }]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#595959',
    margin: 5,
  },
});

export default Carousel;
