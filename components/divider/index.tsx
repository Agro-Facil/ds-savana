import React, { useContext } from "react";
import { Text, View } from "react-native";
import { DividerStyles } from "./styles";
import { ContextTheme } from "../provider";

export interface DividerProps {
  label?: string
}

export const Divider = ({ label }: DividerProps): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = DividerStyles/* (config) */

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.divider} />
    </View>
  )
}

export default Divider