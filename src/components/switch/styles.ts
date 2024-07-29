import { DefaultTheme, defaultTheme as theme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const SwitchStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.space[10],
    height: theme.space[10],
    borderRadius: theme.radii.sm,
    borderColor: theme.colors.primary,
    borderWidth: theme.borderWidths[2]
  },
  label: {
    color: theme.colors.secondary,
    fontWeight: theme.fontWeights.medium,
    marginLeft: theme.space[2]
  },
  switchDisabled: {
    borderColor: theme.colors.dark
  },
  labelDisabled: {
    color: theme.colors.gray
  },
  switchInvalid: {
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
})
