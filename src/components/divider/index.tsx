import React, { useContext } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { DividerStyles } from "./styles";
import { ContextTheme } from "../../provider";
import { Text } from './../text'

export interface DividerProps {
  label?: string
  barSx?: StyleProp<ViewStyle>
}

export const Divider = ({ label, barSx }: DividerProps): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = DividerStyles(config)

  return (
    <View style={styles.container}>
      <View style={[styles.divider, barSx]} />
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.divider, barSx]} />
    </View>
  )
}

export default Divider