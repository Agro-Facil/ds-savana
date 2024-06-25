import React, { useContext, useState } from "react";
import { View, Text, Pressable } from "react-native"
import { styles } from "./styles"
import { ContextTheme } from "../provider";

export const Card = (): JSX.Element => {
  const config = useContext(ContextTheme);
  const [count, setCount] = useState(0)

  return (
    <View style={styles(config).container}>
      <Pressable onPress={() => setCount(prev => prev + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  )
}

export default Card