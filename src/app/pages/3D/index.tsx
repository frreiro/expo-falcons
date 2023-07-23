//add
import FloatingButton from '@app/components/FloatingButton';
import GestureHandler from '@app/components/GestureHandler';
import MainLayout from '@app/layouts';
import { useAppSelector } from '@redux/hooks';
import { ObjectInfo, SectorInfo } from '@resource/data';
import React, { useState } from 'react';

export default function Objects() {
  const year = useAppSelector(state => state.data);
  const [sector, setSector] = useState<SectorInfo>(year.augment_reality[0]);
  const [object, setObject] = useState<ObjectInfo>(sector.objects[0]);

  const sectorSubItemHandler = (item: SectorInfo) => {
    console.log('clicado', item);
    setSector(item);
  };

  const objectSubItemHandler = (item: ObjectInfo) => {
    console.log('clicado', item);
    setObject(item);
  };

  return (
    <MainLayout
      title="PEÇAS"
      subtitle={
        sector && object ? `${sector.sectorName} - ${object.name}` : ''
      }>
      <GestureHandler />
      <FloatingButton
        submenuItems={year.augment_reality}
        menuIcon={sector ? sector.iconName : 'account-group'}
        selectSubItem={sectorSubItemHandler}
        style={{ bottom: 90, left: 50 }}
      />
      {sector && (
        <FloatingButton
          submenuItems={sector.objects}
          menuIcon={object ? object.iconName : 'cube-scan'}
          selectSubItem={objectSubItemHandler}
          style={{ bottom: 90, right: 50 }}
        />
      )}
    </MainLayout>
  );
}
