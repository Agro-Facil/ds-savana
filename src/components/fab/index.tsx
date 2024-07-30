import React, { PropsWithChildren, useContext } from "react";
import { FabStyles } from "./styles";
import { ContextTheme } from "../../provider";
import { Text } from '../text'
import { TouchableOpacity, View } from "react-native";

export interface FabProps {
}

export const Fab = ({ ...props }: PropsWithChildren<FabProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = FabStyles(config)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={() => console.log('ola')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Fab