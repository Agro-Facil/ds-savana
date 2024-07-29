import React, { PropsWithChildren, useContext, useState, useRef, useEffect } from "react";
import { Pressable as RNPressable, View, Animated } from "react-native";
import { AccordionItemStyles } from "./styles";
import { ContextTheme } from "../../../provider";
import { Text } from './../../text'
import { ChevronRight } from "lucide-react-native";
import { AccordionContext } from '..';

export interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  index?: number;
}

export const AccordionItem = ({ icon, title, children, index = 0 }: PropsWithChildren<AccordionItemProps>): JSX.Element => {
  const context = useContext(AccordionContext);
  const [isOpen, setIsOpen] = useState(false);

  const config = useContext(ContextTheme);
  const styles = AccordionItemStyles(config);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen || (context && context.openIndex === index) ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [isOpen, context?.openIndex]);

  const rotateChevron = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg']
  });

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
  });

  const toggleItem = () => {
    if (context) {
      if (context.openIndex === index) {
        context.setOpenIndex(null);
      } else {
        context.setOpenIndex(index);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <View>
      <RNPressable style={styles.container} onPress={toggleItem}>
        <View style={styles.containerText}>
          {icon}
          <Text style={styles.text}>{title}</Text>
        </View>
        <Animated.View style={{ transform: [{ rotate: rotateChevron }] }}>
          <ChevronRight size={32} color={config.colors.secondary} />
        </Animated.View>
      </RNPressable>
      <Animated.View style={{ overflow: 'hidden', height }}>
        <View style={styles.content}>
          <Text style={styles.contentText}>{children}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default AccordionItem;
