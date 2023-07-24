//add
import FloatingButton from '@app/components/FloatingButton';
import GestureHandler from '@app/components/GestureHandler';
import Loading from '@app/components/Loading';
import MainLayout from '@app/layouts';
import { useAppSelector } from '@redux/hooks';
import { ObjectInfo, SectorInfo } from '@resource/data';
import React, { useEffect, useState } from 'react';

export default function Objects() {
  const year = useAppSelector(state => state.data);
  const [sector, setSector] = useState<SectorInfo | null>(null);
  const [object, setObject] = useState<ObjectInfo | null>(null);

  useEffect(() => {
    if (year.augment_reality.length !== 0) {
      setSector(year.augment_reality[0]);
      setObject(year.augment_reality[0].objects[0]);
    } else {
      setSector(null);
    }
  }, [year]);

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
      subtitle={sector && object ? `${sector.sectorName} - ${object.name}` : ''}
      error={{
        condition: year.augment_reality.length === 0,
        message: 'Não há 3Ds referente a este ano',
      }}>
      <Loading />
      {sector && object && (
        <>
          <GestureHandler object={object} />
          <FloatingButton
            submenuItems={year.augment_reality}
            menuIcon={sector ? sector.iconName : 'account-group'}
            selectSubItem={sectorSubItemHandler}
            style={{ bottom: 90, left: 50 }}
          />
          <FloatingButton
            submenuItems={sector.objects}
            menuIcon={object ? object.iconName : 'cube-scan'}
            selectSubItem={objectSubItemHandler}
            style={{ bottom: 90, right: 50 }}
          />
        </>
      )}
    </MainLayout>
  );
}
