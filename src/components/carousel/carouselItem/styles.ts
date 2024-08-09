import { DefaultTheme } from '../../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../../provider';

export const CarouselItemStyles = (config: DefaultTheme | ITheme) => StyleSheet.create({
  container: {
    width: config.space.full,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: config.space[8],
    paddingRight: config.space[8],
    paddingTop: config.space[4],
    paddingBottom: config.space[4]
  },
  containerText: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  content: {
    width: config.space.full,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: config.space[8],
    paddingRight: config.space[8],
    paddingTop: config.space[4],
    paddingBottom: config.space[4]
  },
  contentText: {
    color: config.colors.secondary,
    width: config.space.full
  },
  text: {
    color: config.colors.secondary,
    marginLeft: config.space[4]
  },
});
