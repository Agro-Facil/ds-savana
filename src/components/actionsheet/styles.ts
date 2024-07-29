import { DefaultTheme, defaultTheme as theme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const ActionSheetStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  select: {
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.space[12] as number,
    borderTopRightRadius: theme.space[12] as number,
    padding: theme.space[6],
  },
  dragIndicator: {
    marginVertical: theme.space[6],
    marginHorizontal: theme.space[64],
    borderColor: theme.colors.grayLight,
    borderWidth: 1
  }
})
