import React, { useContext } from "react";
import { FabStyles } from "./styles";
import { ContextTheme } from "../../provider";
import { ColorValue, TouchableOpacity, View } from "react-native";
import { Plus } from "lucide-react-native";

export interface FabProps {
  bg?: ColorValue
  icon?: React.ReactNode,
  onPress?: () => void
}

export const Fab = ({ bg, icon, onPress }: FabProps): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = FabStyles(config)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.fab, bg ? { backgroundColor: bg } : {}]} onPress={onPress}>
        {icon ?? <Plus color={config.colors.white} />}
      </TouchableOpacity>
    </View>
  )
}

export default Fab