import CustomSwiper from '@app/components/CustomSwiper';
import PDFComponent from '@app/components/PDF';
import MainLayout from '@app/layouts';
import { useAppSelector } from '@redux/hooks';
import React, { useRef } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export default function Documents() {
  const year = useAppSelector(state => state.data);
  const indexRef = useRef<number>(0);

  return (
    <MainLayout
      title="DOCUMENTOS"
      error={{
        condition: year.documents.length === 0,
        message: 'Não há documentos referente a esse ano',
      }}>
      <View style={styles.container}>
        <CustomSwiper setActualIndex={index => (indexRef.current = index)}>
          {year.documents.map(document => {
            return (
              <PDFComponent
                key={document.id}
                fileName={document.file_name}
                type={document.type}
                name={document.title}
                fileThumb={document.file_thumb}
                fileURL={document.file_url}
                year={year.year}
              />
            );
          })}
        </CustomSwiper>
      </View>
    </MainLayout>
  );
}
