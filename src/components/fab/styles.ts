import { DefaultTheme, defaultTheme as theme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const FabStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    width: theme.space.full,
    flex: 1
  },
  fab: {
    position: 'absolute',
    width: theme.space[28],
    height: theme.space[28],
    borderRadius: theme.radii.full,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: theme.space[4],
    right: theme.space[4],
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: theme.space[1] as number },
    shadowOpacity: 0.8,
    shadowRadius: theme.space[1] as number,
    elevation: 5,
  },
})
