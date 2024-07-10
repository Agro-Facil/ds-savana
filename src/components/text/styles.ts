import { DefaultTheme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const TextStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  text: {
    fontFamily: theme.fonts.body
  },
  'size-sm': {
    fontSize: theme.fontSizes.xs
  },
  'size-md': {
    fontSize: theme.fontSizes.sm
  },
  'size-lg': {
    fontSize: theme.fontSizes.md
  },
  'size-xl': {
    fontSize: theme.fontSizes.lg
  }
})
