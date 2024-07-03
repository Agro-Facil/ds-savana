import { DefaultTheme } from '../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../provider';

export const LinkStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  link: {
    color: theme.colors.secondary
  },
  notUnderlined: {
    textDecorationLine: 'underline'
  }
})
