import { PropsWithChildren, useContext, useState } from "react";
import { View, Text, Pressable, Dimensions } from "react-native"
import { CardStyles } from "./styles"
import { ContextTheme } from "../../provider";

interface CardProps {

}

export const Card = ({ children }: PropsWithChildren<CardProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = CardStyles(config)
  const { width } = Dimensions.get('window')

  return (
    <Pressable style={[styles.card, styles.shadowProp, { width: width * 0.9 }]}>
      <View>
        {children}
      </View>
    </Pressable>
  )
}

export default Card