import React, { PropsWithChildren, useContext } from "react";
import { ContextTheme } from "../../provider";
import { TextStyles } from "./styles";
import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from "react-native";

export interface TextProps extends RNTextProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  sx?: StyleProp<TextStyle>
}

export const Text = ({ children, size = 'md', ...props }: PropsWithChildren<TextProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = TextStyles(config);

  return (
    <RNText
      style={[
        styles.text,
        styles[`size-${size}`]
      ]}
      {...props}
    >
      {children}
    </RNText>
  )
}

export default Text