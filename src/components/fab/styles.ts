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
    backgroundColor: theme.colors.paletteBlue,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: theme.space[4],
    right: theme.space[2],
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: theme.space[1] as number },
    shadowOpacity: 0.8,
    shadowRadius: theme.space[1] as number,
    elevation: 5,
  },
  fabText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes['3xl'],
    fontWeight: theme.fontWeights.bold,
  },
})
