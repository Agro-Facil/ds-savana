import { PropsWithChildren, useContext } from "react";
import { View, StyleProp, ViewStyle } from "react-native"
import { styles } from "./styles"
import { ContextTheme } from "../provider";

interface VStackProps {
  sx?: StyleProp<ViewStyle>
}

export const HStack = ({ children, sx }: PropsWithChildren<VStackProps>) => {
  const config = useContext(ContextTheme);

  return (
    <View style={[styles(config).container, sx]}>
      {children}
    </View>
  );
};

export default HStack