import React from "react";
import { Pressable, PressableProps } from "react-native";

interface IconProps extends PressableProps {
  as?: React.ReactNode
}

export const Icon = ({ as, ...props }: IconProps): JSX.Element => {
  return (
    <Pressable {...props}>
      {as}
    </Pressable>
  )
}

export default Icon