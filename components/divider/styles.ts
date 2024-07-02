import { DefaultTheme, defaultTheme } from '../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../provider';

export const DividerStyles = /* (theme: DefaultTheme | ITheme) => */ StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: defaultTheme.space.full,
    paddingHorizontal: defaultTheme.space[4]
  },
  divider: {
    flex: 1,
    height: 1,
    borderWidth: defaultTheme.borderWidths[1],
    borderColor: defaultTheme.colors.gray
  },
  label: {
    marginHorizontal: defaultTheme.space[2]
  }
})