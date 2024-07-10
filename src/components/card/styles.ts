import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const CardStyles = (config: ITheme) => StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: config.radii.lg,
    paddingVertical: config.space[20],
    paddingHorizontal: config.space[10],
    margin: config.space[6],
  },
  shadowProp: {
    elevation: 20,
    shadowColor: config.colors.black,
    shadowOffset: {
      width: config.space[6] as number,
      height: config.space[6] as number
    },
    shadowOpacity: 1,
    shadowRadius: config.radii['2xl'] as number,
  },

});
