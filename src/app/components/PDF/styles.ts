import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    borderRadius: 10,
    alignContent: 'center',
    backgroundColor: GlobalStyles.colors.third,
    paddingLeft: 16,
    paddingRight: 16,
  },
  thumbnail_image: {
    width: '100%',
    height: '80%',
  },
  title_continer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 5,

    marginTop: 10,
  },
  text_container: {},
  pdf_title: {
    fontFamily: GlobalStyles.fonts.family.shareTechMono.regular,
    fontSize: 15,
    color: GlobalStyles.colors.light,
  },
  pdf_year: {
    fontFamily: GlobalStyles.fonts.family.shareTechMono.regular,
    fontSize: 11,
    color: GlobalStyles.colors.light,
  },
});
