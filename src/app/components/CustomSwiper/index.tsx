import { GlobalStyles } from '@globalStyle/GlobalStyles';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Swiper from 'react-native-swiper';

import { styles } from './styles';

export interface ICustomSwiper {
  children: React.ReactNode;
  backgroundElement?: React.ReactNode;
  setActualIndex: (index: number) => void;
  style?: StyleProp<ViewStyle>;
}

export default function CustomSwiper({
  children: slides,
  backgroundElement,
  setActualIndex,
  style,
}: ICustomSwiper) {
  return (
    <View style={style}>
      {backgroundElement ? backgroundElement : <></>}
      <Swiper
        onIndexChanged={index => setActualIndex(index)}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}
        activeDotColor={GlobalStyles.colors.secondary}>
        {slides}
      </Swiper>
    </View>
  );
}
