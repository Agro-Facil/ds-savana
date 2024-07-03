import { Children, PropsWithChildren, useContext } from "react";
import { View, StyleProp, ViewStyle } from "react-native"
import { styles } from "./styles"
import { ContextTheme } from "../provider";

interface VStackProps {
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  splitted?: boolean
  sx?: StyleProp<ViewStyle>
}

export const VStack = ({ children, sx, space = 'xs', splitted = false }: PropsWithChildren<VStackProps>) => {
  const config = useContext(ContextTheme);
  const spaces = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 40,
    '3xl': 60,
    '4xl': 80
  }

  return (
    <View style={[styles(config).container, sx]}>
      {Children.toArray(children).map((child, index) => {
        const currentSpace = spaces[space as keyof typeof spaces]
        if (index < Children.toArray(children)?.length - 1 || splitted) {
          return (
            <>
              {splitted && <View style={{ height: (currentSpace / 2) }} />}
              {child}
              <View style={{ height: splitted ? (currentSpace / 2) : currentSpace }} />
            </>
          )
        }

        return child
      })}
    </View>
  );
};

export default VStack