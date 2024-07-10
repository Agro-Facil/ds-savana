import { DefaultTheme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const DividerStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.space.full,
    paddingHorizontal: theme.space[4]
  },
  divider: {
    flex: 1,
    height: 1,
    borderWidth: theme.borderWidths[1],
    borderColor: theme.colors.grayLight
  },
  label: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.md,
    marginHorizontal: theme.space[2]
  }
})