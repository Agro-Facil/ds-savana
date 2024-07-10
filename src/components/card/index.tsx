import { PropsWithChildren, useContext, useState } from "react";
import { View, Text, Pressable } from "react-native"
import { CardStyles } from "./styles"
import { ContextTheme } from "../../provider";

interface CardProps {

}

export const Card = ({ children }: PropsWithChildren<CardProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = CardStyles(config)

  return (
    <Pressable style={[styles.card, styles.shadowProp]}>
      <View>
        {children}
      </View>
    </Pressable>
  )
}

export default Card