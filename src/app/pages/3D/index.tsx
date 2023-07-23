//add
import GestureHandler from '@app/components/GestureHandler';
import MainLayout from '@app/layouts';
import { useAppSelector } from '@redux/hooks';
import React from 'react';

export default function Objects() {
  const year = useAppSelector(state => state.data);

  return (
    <MainLayout title="PEÇAS">
      <GestureHandler />
    </MainLayout>
  );
}
