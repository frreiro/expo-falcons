import { StyleSheet } from 'react-native';

import { GlobalStyles } from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: GlobalStyles.colors.primary,
  },
  text_title: {
    fontFamily: GlobalStyles.fonts.family.hanjet.circleBold,
    fontSize: 36,
    color: GlobalStyles.colors.light,
  },
  text_subtitle: {
    fontFamily: GlobalStyles.fonts.family.hanjet.circleBold,
    fontSize: 28,
    marginTop: 10,
    color: GlobalStyles.colors.light,
  },
});
