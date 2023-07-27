import { RootStackParamList } from '@app/App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import React, { useEffect } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Webview'>;

export default function PDFIos(props: Props) {
  const localPath = `${FileSystem.cacheDirectory}${props.route.params.name}`;
  const shareDoc = async () => {
    try {
      const res = await FileSystem.downloadAsync(
        props.route.params.remoteURL,
        localPath,
      );
      await Sharing.shareAsync(res.uri, {
        mimeType: 'application/pdf',
        UTI: 'application/pdf',
      });
    } catch (e) {
      console.log('[ERROR] docuement', JSON.stringify(e));
    }
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Button title="share" onPress={shareDoc} />,
      title: props.route.params.name,
    });
    if (!props.route.params.name || !props.route.params.remoteURL) {
      props.navigation.goBack();
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
