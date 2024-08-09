import { DefaultTheme, defaultTheme as theme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const PreviewUploadStyles = /* (theme: DefaultTheme | ITheme) =>  */StyleSheet.create({
  label: {
    fontFamily: theme.fonts.body,
    color: theme.colors.secondary,
    fontWeight: theme.fontWeights.medium,
    marginLeft: theme.space[2],
    position: 'absolute',
    top: 0,
    left: 10
  },
  container: {
    flexDirection: 'row',
    elevation: 20,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: theme.space[6] as number,
      height: theme.space[6] as number
    },
    shadowOpacity: 1,
    shadowRadius: theme.radii['2xl'] as number,
    borderRadius: 10
  },
  image: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  name: {
    position: 'absolute',
    bottom: 0,
    color: 'black',
    backgroundColor: 'white',
    padding: 6,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.md,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  video: {
    width: 350,
    height: 275,
  }
})
