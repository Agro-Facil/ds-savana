import React, { PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
import { Modal, StyleProp, TextStyle, View, StatusBar, StyleSheet, TouchableOpacity, LayoutChangeEvent } from "react-native";
import { GestureDetector, GestureHandlerRootView, FlingGestureHandler, Directions, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { ContextTheme } from "../../provider";
import { ActionSheetStyles } from "./styles";

export interface ActionSheetProps {
  open?: boolean
  onOpen?: () => void
  dragIndicator?: boolean
  sx?: StyleProp<TextStyle>
}

export const ActionSheet = ({ sx, open, onOpen, dragIndicator = true, children }: PropsWithChildren<ActionSheetProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = ActionSheetStyles(config);
  const translateY = useSharedValue(300);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerHeight(event.nativeEvent.layout.height);
  }, []);

  useEffect(() => {
    if (open) {
      translateY.value = withSpring(0, { damping: 10, stiffness: 80 });
    } else {
      translateY.value = withSpring(20, { damping: 10, stiffness: 80 });
    }
  }, [open]);

  const flingUpGesture = Gesture.Fling()
    .direction(Directions.UP)
    .onEnd(() => {
      translateY.value = withSpring(0, { damping: 10, stiffness: 80 });
    });

  const flingDownGesture = Gesture.Fling()
    .direction(Directions.DOWN)
    .onEnd(() => {
      runOnJS(onOpen as any)();
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Modal
      transparent={true}
      visible={open}
      onRequestClose={onOpen}
    >
      <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.overlay}>
          <TouchableOpacity style={StyleSheet.absoluteFill} onPress={onOpen} />
          <GestureDetector gesture={Gesture.Exclusive(flingUpGesture, flingDownGesture)}>
            <Animated.View
              style={[styles.container, animatedStyle, sx]}
              onLayout={handleLayout}
            >
              {dragIndicator && <View style={styles.dragIndicator} />}
              {children}
            </Animated.View>
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </Modal>
  )
}

export default ActionSheet;
