//add
import MainLayout from '@app/layouts';
import { useAppSelector } from '@redux/hooks';
import React from 'react';
import { Text } from 'react-native';

export default function Objects() {
  const year = useAppSelector(state => state.data);

  return (
    <MainLayout title="PEÇAS">
      <Text>oPA</Text>
    </MainLayout>
  );
}
