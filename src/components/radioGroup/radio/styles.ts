import { DefaultTheme, defaultTheme as theme } from '../../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../../provider';

export const RadioStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.space[10],
    height: theme.space[10],
    borderRadius: theme.radii.full,
    backgroundColor: theme.colors.secondaryLight,
    borderColor: theme.colors.primary,
    borderWidth: theme.borderWidths[2]
  },
  label: {
    color: theme.colors.secondary,
    fontWeight: theme.fontWeights.medium,
    marginLeft: theme.space[2]
  },
  checkboxDisabled: {
    borderColor: theme.colors.dark
  },
  labelDisabled: {
    color: theme.colors.gray
  },
  checkboxInvalid: {
    borderColor: theme.colors.error,
  },
  labelInvalid: {
    borderColor: theme.colors.error
  },
  hint: {
    color: theme.colors.gray,
    marginTop: theme.space[2]
  },
  hintInvalid: {
    color: theme.colors.error
  }
});
