import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_no_content: {
    fontFamily: GlobalStyles.fonts.family.shareTechMono.regular,
    color: GlobalStyles.colors.light,
    fontSize: 10,
  },
  container_no_content: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
