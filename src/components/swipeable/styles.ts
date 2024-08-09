import { StyleSheet } from 'react-native';
import { ITheme, defaultTheme as config } from '../../provider';

export const SwipeableStyles = /* (config: ITheme) =>  */StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBack: {
    flex: 1,
    borderRadius: config.radii.xl,
    margin: config.space[4],
    position: 'absolute',
    top: 6,
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingLeft: 60,
    width: config.space.full,
    height: config.space.full
  },
  backgroundButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    right: 10,
    paddingRight: 10,
    borderTopRightRadius: config.radii.xl,
    borderBottomRightRadius: config.radii.xl,
    height: config.space.full
  },
  label: {
    marginTop: config.space[2],
    color: config.colors.white,
    fontWeight: config.fontWeights.semibold,
    fontSize: config.fontSizes.lg
  }
});
