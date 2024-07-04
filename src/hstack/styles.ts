import { StyleSheet } from 'react-native';
import { ITheme } from './../provider';

export const styles = (config: ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: config.space.full
  }
});