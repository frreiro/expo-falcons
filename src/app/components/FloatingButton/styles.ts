import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    justifyContent: 'center',
    alignItems: 'center',
  },

  menu: {
    backgroundColor: GlobalStyles.colors.secondary,
  },

  submenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: GlobalStyles.colors.secondary,
  },
});
