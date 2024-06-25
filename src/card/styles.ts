import { StyleSheet } from 'react-native';
import { ITheme } from './../provider';

export const styles = (config: ITheme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: config.colors.primary,
    minHeight: 200,
    margin: 16,
    borderRadius: 16,
    borderWidth: 1,
  }
});
