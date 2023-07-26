import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { Documents, YearsData } from '@resource/data';
import { Image } from 'expo-image';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

export default function PDFComponent(props: IDocument) {
  const openPDF = async () => {
    //FIXME: Gerenciar erro
    try {
      Platform.OS === 'android'
        ? await pdfAndroid({
            name: props.fileName,
            remoteURL: props.fileURL,
          })
        : await WebBrowser.openBrowserAsync(props.fileURL);
    } catch (error) {
      console.log('Error to open file');
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
