import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary,
  },
  swiper_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '80%',
    height: '80%',
  },
  text_no_content: {
    fontFamily: GlobalStyles.fonts.family.shareTechMono.regular,
    color: GlobalStyles.colors.light,
    fontSize: 10,
  },
});
