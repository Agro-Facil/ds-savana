import { PropsWithChildren, useContext } from "react";
import { Text as RNText } from "react-native"
import { styles } from "./styles"
import { ContextTheme } from "../provider";

interface Props {
  props?: typeof RNText
}

export const ButtonText = ({ props, children }: PropsWithChildren<Props>): JSX.Element => {
  const config = useContext(ContextTheme);
  return (
    <RNText {...props}>
      {children}
    </RNText>
  )
}

export default ButtonText