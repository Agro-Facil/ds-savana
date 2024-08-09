import React, { PropsWithChildren, useContext } from "react";
import { Image, PressableProps, Pressable as RNPressable, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { ButtonStyles, ButtonTextStyles } from "./styles"
import { ContextTheme } from "../../provider";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text } from './../text'

export interface ButtonProps extends PressableProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'full'
  variant?: 'solid' | 'outline'
  icons?: React.ReactNode[]
  action?: 'primary' | 'secondary' | 'success' | 'error' | 'google' | 'facebook' | 'apple'
  sx?: StyleProp<ViewStyle>
  childrenSx?: StyleProp<TextStyle>
  isDisabled?: boolean
}

export const Button = ({ size = 'full', variant = 'solid', icons, action = 'primary', sx, childrenSx, isDisabled, children, ...props }: PropsWithChildren<ButtonProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = ButtonStyles(config)
  const textStyles = ButtonTextStyles(config)
  const hasIcon = (action !== 'facebook' && action !== 'google') && icons

  return (
    <RNPressable
      {...props}
      disabled={isDisabled}
      style={[
        {
          borderWidth: 1, borderColor: 'green'
        },
        styles.container,
        styles[size],
        styles[`${variant}-${action}` as keyof typeof styles],
        isDisabled && styles.disabled,
        hasIcon && !!children && styles.hasIcon,
        hasIcon && !children && styles.hasIconWithoutChildren,
        sx
      ]}
    >
      {action === 'google' && <Image width={24} height={24} source={require('./../../assets/google.png')} />}
      {action === 'facebook' && <FontAwesome5 name="facebook" size={24} color={variant === 'outline' ? config.colors.paletteBlue : config.colors.white} />}
      {hasIcon && icons[0]}
      {children && (
        <Text
          style={[
            !icons &&
            action !== 'google' &&
            action !== 'facebook' && {
              width: config.space.full
            },
            textStyles.text,
            textStyles[`${variant}-${action}` as keyof typeof textStyles],
            childrenSx
          ]}
        >
          {children}
        </Text>
      )}
      {children && hasIcon && (icons.length > 1 ? icons[1] : <View style={{ width: 24, height: 24 }} />)}
      {(action === 'facebook' || action === 'google') && <View style={{ width: 24, height: 24 }} />}
    </RNPressable>
  )
}

export default Button