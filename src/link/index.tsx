import React, { PropsWithChildren, useContext } from "react";
import { Text, TextProps } from "react-native";
import { LinkStyles } from "./styles";
import { ContextTheme } from "../provider";

export interface LinkProps extends TextProps {
  isUnderline?: boolean
}

export const Link = ({ isUnderline = true, children, ...props }: PropsWithChildren<LinkProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = LinkStyles(config)

  return (
    <Text {...props} style={[styles.link, isUnderline && styles.notUnderlined]}>
      {children}
    </Text>
  )
}

export default Link