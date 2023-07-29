import { Image } from 'expo-image';
import React from 'react';
import { ImageRequireSource, Text, View } from 'react-native';

import { styles } from './styles';

export type CardType = {
  id: string;
  name: string;
  image_uri: ImageRequireSource;
};

export default function Car(props: CardType) {
  return (
    <View style={styles.container}>
      <Image
        source={props.image_uri}
        style={styles.car}
        onLoad={data => console.log(data)}
      />
      <Text style={styles.car_text}>{props.name}</Text>
    </View>
  );
}
