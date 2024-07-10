import React, { PropsWithChildren, useContext } from "react";
import { ContextTheme } from "../../provider";
import { HeadingStyles } from "./styles";
import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from "react-native";

export interface HeadingProps extends RNTextProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  sx?: StyleProp<TextStyle>
}

export const Heading = ({ children, size = 'md', ...props }: PropsWithChildren<HeadingProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = HeadingStyles(config);

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

export default Heading