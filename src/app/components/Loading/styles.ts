import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: GlobalStyles.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
