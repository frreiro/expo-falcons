import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>{title}</Text>
    </View>
  );
}
