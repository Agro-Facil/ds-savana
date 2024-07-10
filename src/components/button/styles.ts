import { DefaultTheme, defaultTheme as config } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const ButtonStyles = (config: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: config.radii.xl,
    borderWidth: config.borderWidths[1]
  },
  xxs: {
    borderRadius: config.radii.lg,
    padding: config.space[1],
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
  'outline-primary': {
    backgroundColor: 'transparent',
    borderColor: config.colors.primary
  },
  'outline-secondary': {
    backgroundColor: 'transparent',
    borderColor: config.colors.secondary
  },
  'outline-success': {
    backgroundColor: 'transparent',
    borderColor: config.colors.success
  },
  'outline-error': {
    backgroundColor: 'transparent',
    borderColor: config.colors.error
  },
  'outline-google': {
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderColor: config.colors.gray
  },
  'outline-facebook': {
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderColor: config.colors.paletteBlue
  },
  'solid-primary': {
    backgroundColor: config.colors.primary,
    borderColor: config.colors.primary
  },
  'solid-secondary': {
    backgroundColor: config.colors.secondary,
    borderColor: config.colors.secondary,
  },
  'solid-success': {
    backgroundColor: config.colors.success,
    borderColor: config.colors.success,
  },
  'solid-error': {
    backgroundColor: config.colors.error,
    borderColor: config.colors.error,
  },
  'solid-google': {
    justifyContent: 'space-between',
    backgroundColor: config.colors.light,
    borderColor: config.colors.light,
  },
  'solid-facebook': {
    justifyContent: 'space-between',
    backgroundColor: config.colors.paletteBlue,
    borderColor: config.colors.paletteBlue,
  },
  disabled: {
    opacity: 0.5
  },
  hasIcon: {
    justifyContent: 'space-between',
  },
  hasIconWithoutChildren: {
    justifyContent: 'center',
  }
});

export const ButtonTextStyles = (config: DefaultTheme | ITheme) => StyleSheet.create({
  text: {
    fontFamily: config.fonts.body,
    fontSize: config.fontSizes.lg,
    fontWeight: config.fontWeights.semibold
  },
  'outline-primary': {
    color: config.colors.primary
  },
  'outline-secondary': {
    color: config.colors.secondary
  },
  'outline-success': {
    color: config.colors.success
  },
  'outline-error': {
    color: config.colors.error
  },
  'outline-google': {
    color: config.colors.grayDark
  },
  'outline-facebook': {
    color: config.colors.paletteBlue
  },
  'solid-primary': {
    color: config.colors.white
  },
  'solid-secondary': {
    color: config.colors.white
  },
  'solid-success': {
    color: config.colors.white
  },
  'solid-error': {
    color: config.colors.white
  },
  'solid-google': {
    color: config.colors.grayDark
  },
  'solid-facebook': {
    color: config.colors.white
  },
});
