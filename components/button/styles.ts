import { StyleSheet } from 'react-native';
import { ITheme } from './../provider';

export const styles = (config: ITheme) => StyleSheet.create({
  container: {
    borderColor: config.colors.primary,
    borderWidth: 1
  }
});
