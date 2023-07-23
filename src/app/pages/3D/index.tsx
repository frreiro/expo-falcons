//add
import FloatingButton from '@app/components/FloatingButton';
import GestureHandler from '@app/components/GestureHandler';
import {
  subMenuItemsParts,
  subMenuItemsSector,
} from '@app/data/FloatingItemData';
import MainLayout from '@app/layouts';
import { useAppSelector } from '@redux/hooks';
import React from 'react';

export default function Objects() {
  const year = useAppSelector(state => state.data);

  return (
    <MainLayout title="PEÇAS">
      <GestureHandler />
      <FloatingButton
        submenuItems={subMenuItemsSector}
        menuIcon={'account-group'}
        style={{ bottom: 90, left: 50 }}
      />
      <FloatingButton
        submenuItems={subMenuItemsParts}
        menuIcon={'cube-scan'}
        style={{ bottom: 90, right: 50 }}
      />
    </MainLayout>
  );
}
