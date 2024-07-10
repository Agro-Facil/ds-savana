import React, { PropsWithChildren, useContext } from "react";
import { LinkStyles } from "./styles";
import { ContextTheme } from "../../provider";
import { Text, TextProps } from './../text'

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