import React, { PropsWithChildren, useContext } from "react";
import { PressableProps, Pressable as RNPressable, Text } from "react-native"
import { ButtonStyles, ButtonTextStyles } from "./styles"
import { ContextTheme } from "../provider";

export interface ButtonProps extends PressableProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
  variant?: 'solid' | 'outline'
  action?: 'primary' | 'secondary' | 'success' | 'error'
  isDisabled?: boolean
}

export const Button = ({ size = 'full', variant = 'solid', action = 'primary', isDisabled, children, ...props }: PropsWithChildren<ButtonProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = ButtonStyles(config)
  const textStyles = ButtonTextStyles(config)

  return (
    <RNPressable
      {...props}
      disabled={isDisabled}
      style={[
        styles.container,
        styles[size],
        styles[action],
        styles[variant],
        isDisabled && styles.disabled
      ]}
    >
      <Text
        style={[
          textStyles.text,
          textStyles[action],
          textStyles[variant],
        ]}
      >
        {children}
      </Text>
    </RNPressable>
  )
}

export default Button