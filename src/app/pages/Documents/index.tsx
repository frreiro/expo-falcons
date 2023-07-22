import MainLayout from '@app/layouts';
import { useAppSelector } from '@redux/hooks';
import React from 'react';
import { Text } from 'react-native';

export default function Documents() {
  const year = useAppSelector(state => state.data);
  console.log(year);
  return (
    <MainLayout title="DOCUMENTS">
      <Text>oPA</Text>
    </MainLayout>
  );
}
