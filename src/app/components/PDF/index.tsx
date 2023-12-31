import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Documents, YearsData } from '@resource/data';
import { Image } from 'expo-image';
import React from 'react';
import { Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootBottomParamList } from '../TabItens';
import pdfAndroid from './PDFAndroid';
import { styles } from './styles';

export interface IDocument {
  fileName: string;
  name: Documents['title'];
  type: Documents['type'];
  year: YearsData['year'];
  fileThumb: Documents['file_thumb'];
  fileURL: Documents['file_url'];
}

export interface PDFInfo {
  remoteURL: string;
  name: string;
}

export default function PDFComponent(props: IDocument) {
  const navigation = useNavigation<NavigationProp<RootBottomParamList>>();

  const openPDF = async () => {
    try {
      if (Platform.OS === 'android') {
        await pdfAndroid({
          name: props.fileName,
          remoteURL: props.fileURL,
        });
      } else {
        navigation.navigate('Webview', {
          remoteURL: props.fileURL,
          name: props.fileName,
        });
      }
    } catch (error) {
      console.log('Error to open file', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={openPDF}>
      <View style={styles.container}>
        <Image
          source={props.fileThumb}
          contentFit="contain"
          style={styles.thumbnail_image}
        />
        <View style={styles.title_continer}>
          <View style={styles.text_container}>
            <Text style={styles.pdf_title}>{props.name.toUpperCase()}</Text>
            <Text style={styles.pdf_year}>{props.year}</Text>
          </View>
          {props.type === 'assemblies' ? (
            <Icon name={'cog'} size={25} color={GlobalStyles.colors.light} />
          ) : (
            <Icon name={'hammer'} size={25} color={GlobalStyles.colors.light} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
