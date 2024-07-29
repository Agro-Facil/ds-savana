import { DefaultTheme, defaultTheme as theme } from '../../provider/index';
import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const SelectFieldStyles = (theme: DefaultTheme | ITheme) => StyleSheet.create({
  select: {
    flexDirection: 'row',
    height: theme.space[20],
    width: theme.space.full,
    backgroundColor: theme.colors.light,
    borderRadius: theme.radii.md,
    paddingHorizontal: theme.space[4],
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  selectInvalid: {
    backgroundColor: theme.colors.errorLight,
    borderWidth: theme.borderWidths[1],
    color: theme.colors.error,
    borderColor: theme.colors.error
  },
  label: {
    fontFamily: theme.fonts.body,
    color: theme.colors.secondary,
    fontWeight: theme.fontWeights.medium
  },
  labelDisabled: {
    color: theme.colors.gray
  },
  containerInput: {
    flexDirection: 'row',
    width: theme.space.full,
    position: 'relative'
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.space[6] as number,
    borderTopRightRadius: theme.space[6] as number,
    padding: theme.space[6],
  },
  option: {
    padding: theme.space[8],
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.grayDark,
    fontSize: theme.fontSizes.md,
  },
  hint: {
    fontFamily: theme.fonts.body,
    color: theme.colors.gray,
    marginTop: theme.space[2],
    marginBottom: theme.space[1]
  },
  hintInvalid: {
    color: theme.colors.error
  }
})
