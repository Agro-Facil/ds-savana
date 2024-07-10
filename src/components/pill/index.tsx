import React, { PropsWithChildren, useContext } from "react";
import { ContextTheme } from "../../provider";
import { PillStyles } from "./styles";
import { Text } from "./../text";

interface PillProps {
  color?: 'warning' | 'caution' | 'success' | 'error' | 'info'
}

export const Pill = ({ children, color = 'success' }: PropsWithChildren<PillProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = PillStyles(config)

  return (
    <Text
      style={[
        styles.text,
        styles[`color-${color}`]
      ]}
    >
      {children}
    </Text>
  )
}

export default Pill