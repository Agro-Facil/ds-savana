import { DefaultTheme, defaultTheme as theme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const PillStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16
  },
  'color-warning': {
    backgroundColor: theme.colors.warningLight,
    color: theme.colors.warningDark,
  },
  'color-caution': {
    backgroundColor: theme.colors.cautionLight,
    color: theme.colors.cautionDark,
  },
  'color-success': {
    backgroundColor: theme.colors.successLight,
    color: theme.colors.successDark,
  },
  'color-error': {
    backgroundColor: theme.colors.errorLight,
    color: theme.colors.errorDark,
  },
  'color-info': {
    backgroundColor: theme.colors.infoLight,
    color: theme.colors.infoDark,
  }
})
