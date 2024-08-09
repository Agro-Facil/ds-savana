import { DefaultTheme, defaultTheme as config } from '../../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../../provider';

export const StepItemStyles = (config: DefaultTheme | ITheme) => StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: config.space[4],
    paddingVertical: config.space[2]
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: config.space[16],
    position: 'relative',
  },
  circle: {
    borderRadius: config.radii.xl,
    borderWidth: config.borderWidths[2],
    zIndex: 1,
  },
  circleLarge: {
    width: config.space[10],
    height: config.space[10]
  },
  circleSmall: {
    marginTop: config.space[2],
    width: config.space[8],
    height: config.space[8]
  },
  activeLine: {
    backgroundColor: config.colors.primary,
  },
  activeCircle: {
    borderColor: config.colors.primary,
    backgroundColor: config.colors.primary,
  },
  inactiveLine: {
    backgroundColor: config.colors.gray,
  },
  inactiveCircle: {
    borderColor: config.colors.gray,
    backgroundColor: config.colors.gray,
  },
  stepContent: {
    paddingHorizontal: 10,
    marginRight: 30
  },
  line: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 2,
    height: '100%',
  },
  title: {
    height: 20,
    lineHeight: 24,
    marginBottom: 4,
    color: config.colors.gray,
    fontWeight: config.fontWeights.medium
  },
  titleActive: {
    color: config.colors.secondary
  }
});
