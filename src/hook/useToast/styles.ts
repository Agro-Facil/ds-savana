import { DefaultTheme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const ToastStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    position: 'absolute',
    top: '5%',
    width: '100%',
    zIndex: 999999,
    alignItems: 'center'
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.lg,
    marginLeft: theme.space[2]
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.space[12],
    marginBottom: theme.space[4],
    borderRadius: theme.radii.lg,
    width: theme.space['9/10'],
    position: 'absolute',
    zIndex: 999999,
  },
  'toast-success': {
    backgroundColor: theme.colors.successDark,
  },
  'toast-error': {
    backgroundColor: theme.colors.errorDark,
  },
  'toast-warning': {
    backgroundColor: theme.colors.warningDark,
  },
  'toast-info': {
    backgroundColor: theme.colors.infoDark,
  }
});
