import { PropsWithChildren, useContext } from "react";
import { Pressable as RNPressable } from "react-native"
import { styles } from "./styles"
import { ContextTheme } from "../provider";

interface Props {
  props?: typeof RNPressable
}

export const Button = ({ props, children }: PropsWithChildren<Props>): JSX.Element => {
  const config = useContext(ContextTheme);
  return (
    <RNPressable {...props} style={styles(config).container}>
      {children}
    </RNPressable>
  )
}

export default Button