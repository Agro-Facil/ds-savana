import { DefaultTheme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const HeadingStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  text: {
    fontFamily: theme.fonts.body
  },
  'size-sm': {
    fontSize: theme.fontSizes['2xl']
  },
  'size-md': {
    fontSize: theme.fontSizes['3xl']
  },
  'size-lg': {
    fontSize: theme.fontSizes['4xl']
  },
  'size-xl': {
    fontSize: theme.fontSizes['5xl']
  }
})
