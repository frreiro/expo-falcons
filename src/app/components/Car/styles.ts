import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 281,
    height: 177,
    backgroundColor: GlobalStyles.colors.third,
    borderRadius: 20,
    position: 'relative',
    marginBottom: 72,
  },
  car: {
    width: '100%',
    height: 267,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 15 },
    shadowRadius: 10,
    shadowOpacity: 0.6,
  },
  car_text: {
    fontFamily: 'ShareTechMono-Regular',
    color: GlobalStyles.colors.light,
    fontSize: 15,
  },
});
