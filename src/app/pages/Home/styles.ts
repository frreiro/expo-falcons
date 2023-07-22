import { StyleSheet } from 'react-native';

import { GlobalStyles } from '../../../styles/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: GlobalStyles.colors.primary,
  },
  social_container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linkedin_icon: {
    marginLeft: 20,
    marginRight: 10,
  },
  box: {
    width: 281,
    height: 177,
    backgroundColor: GlobalStyles.colors.third,
    borderRadius: 20,
    position: 'absolute',
  },
  swiper_container: {
    height: '70%',
    alignItems: 'center',
  },
});
