import { DefaultTheme } from './../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from './../provider';

export const ButtonStyles = (config: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: config.radii.sm,
    borderWidth: config.borderWidths[1]
  },
  xs: {
    padding: config.space[6],
    width: config.space['1/3']
  },
  sm: {
    padding: config.space[6],
    width: config.space['2/4']
  },
  md: {
    padding: config.space[8],
    width: config.space['4/6']
  },
  lg: {
    padding: config.space[8],
    width: config.space['4/5']
  },
  full: {
    padding: config.space[8],
    width: config.space['full']
  },
  solid: {
    backgroundColor: config.colors.primary,
    borderColor: config.colors.primary,
    color: config.colors.white
  },
  outline: {
    backgroundColor: 'transparent',
    color: config.colors.primary,
  },
  primary: {
    borderColor: config.colors.primary
  },
  secondary: {
    borderColor: config.colors.secondary
  },
  success: {
    borderColor: config.colors.success
  },
  error: {
    borderColor: config.colors.error
  },
  disabled: {
    opacity: 0.5
  }
});

export const ButtonTextStyles = (config: DefaultTheme | ITheme) => StyleSheet.create({
  text: {
    fontFamily: config.fonts.body,
    fontSize: config.fontSizes.md,
    fontWeight: config.fontWeights.semibold
  },
  primary: {
    color: config.colors.primary
  },
  secondary: {
    color: config.colors.secondary
  },
  success: {
    color: config.colors.success
  },
  error: {
    color: config.colors.error
  },
  solid: {
    color: config.colors.white
  },
  outline: {}
});
