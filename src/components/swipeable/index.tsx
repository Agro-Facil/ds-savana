import React, { PropsWithChildren, ReactNode, useContext, useState } from 'react';
import { Platform, Text, TouchableOpacity, View, LayoutChangeEvent, ColorValue } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { ContextTheme } from '../../provider';
import { SwipeableStyles } from './styles';

interface BackgroundMenu {
  label: string;
  icon: ReactNode;
  onPress: () => void;
  color?: ColorValue;
}

interface Props {
  backgroundMenu: BackgroundMenu;
}

const Swipeable = ({
  children,
  backgroundMenu,
}: PropsWithChildren<Props>) => {
  const translateX = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const config = useContext(ContextTheme);
  const styles = SwipeableStyles/* (config) */

  const [isOpen, setIsOpen] = useState(false);
  const [frontHeight, setFrontHeight] = useState(0);

  const animatedStyleFront = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const animatedStyleBack = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -120 }],
    };
  });

  const springOptions = { damping: 100, stiffness: 200 };

  const gestureHandler =
    Platform.OS === 'ios'
      ? Gesture.Fling()
        .direction(3)
        .onBegin((event) => {
          offsetX.value = event.x;
        })
        .onTouchesMove((event) => {
          const newX = event.changedTouches[0].x + 10;
          if (newX < offsetX.value) {
            runOnJS(setIsOpen)(true);
            translateX.value = withSpring(-120, springOptions);
          } else {
            runOnJS(setIsOpen)(false);
            translateX.value = withSpring(0, springOptions);
          }
        })
      : Gesture.Pan()
        .manualActivation(true)
        .onBegin((event) => {
          offsetY.value = event.y;
          offsetX.value = event.x;
        })
        .onTouchesMove((event, state) => {
          const newY = event.changedTouches[0].y + 10;
          if (offsetY.value === newY) {
            state.activate();
          }
          const newX = event.changedTouches[0].x + 10;

          if (newX <= offsetX.value) {
            runOnJS(setIsOpen)(true);
            translateX.value = withSpring(-120, springOptions);
          } else {
            runOnJS(setIsOpen)(false);
            translateX.value = withSpring(0, springOptions);
          }
        });

  const toggleOpenHandler = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      translateX.value = withSpring(0, springOptions);
    } else {
      translateX.value = withSpring(-120, springOptions);
    }
  };

  const onLayoutFront = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setFrontHeight(height);
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Animated.View style={[styles.cardBack, { height: frontHeight - +config.space[14], right: -120 }, animatedStyleBack]}>
          <View style={[{ width: 120 }]}>
            <TouchableOpacity
              key={backgroundMenu.label}
              activeOpacity={0.9}
              onPress={() => {
                toggleOpenHandler();
                backgroundMenu.onPress();
              }}
              style={[styles.backgroundButton, { backgroundColor: backgroundMenu.color ?? config.colors.primary }]}
            >
              {backgroundMenu.icon}
              <Text style={styles.label}>{backgroundMenu.label}</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View style={animatedStyleFront} onLayout={onLayoutFront}>
          <GestureDetector gesture={gestureHandler}>
            {children}
          </GestureDetector>
        </Animated.View>
      </GestureHandlerRootView>
    </View>
  );
};

export default Swipeable;
