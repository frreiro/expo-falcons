import { RootStackParamList } from '@app/App';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Webview'>;

export default function PDFIos(props: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    if (!props.route.params.name || !props.route.params.remoteURL) {
      navigation.goBack();
    }
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: props.route.params.remoteURL }}
        scalesPageToFit={true}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="black" size="large" />}
      />
      <Text>Oi</Text>
    </View>
  );
}
