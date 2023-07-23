import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>{title}</Text>
      {subtitle && <Text style={styles.text_subtitle}>{subtitle}</Text>}
    </View>
  );
}
