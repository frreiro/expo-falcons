import React from 'react';
import { Image, ImageRequireSource, Text, View } from 'react-native';

import { styles } from './styles';

export type CardType = {
  id: number;
  name: string;
  image_uri: ImageRequireSource;
};

export default function Car(props: CardType) {
  return (
    <View style={styles.container}>
      <Image source={props.image_uri} style={styles.car} />
      <Text style={styles.car_text}>{props.name}</Text>
    </View>
  );
}
