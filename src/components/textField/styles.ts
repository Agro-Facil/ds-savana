import { DefaultTheme, defaultTheme as theme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const TextFieldStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    width: theme.space.full
  },
  label: {
    color: theme.colors.gray,
    fontWeight: theme.fontWeights.medium
  },
  input: {
    height: theme.space[20],
    width: theme.space.full,
    backgroundColor: theme.colors.light,
    borderRadius: theme.radii.md,
    paddingHorizontal: theme.space[4]
  },
  containerInput: {
    flexDirection: 'row',
    width: theme.space.full,
    position: 'relative'
  },
  eye: {
    justifyContent: 'center',
    paddingHorizontal: theme.space[2],
    height: theme.space.full,
    position: 'absolute',
    right: theme.space[4]
  },
  labelDisabled: {
    color: theme.colors.gray
  },
  inputInvalid: {
    backgroundColor: theme.colors.errorLight,
    borderWidth: theme.borderWidths[1],
    color: theme.colors.error,
    borderColor: theme.colors.error
  },
  hint: {
    color: theme.colors.gray,
    marginTop: theme.space[2],
    marginBottom: theme.space[1]
  },
  hintInvalid: {
    color: theme.colors.error
  }
});