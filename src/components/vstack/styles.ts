import { StyleSheet } from 'react-native';
import { ITheme } from '../../provider';

export const styles = (config: ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: config.space.full
  }
});