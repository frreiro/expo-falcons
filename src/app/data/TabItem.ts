import Documents from '@pages/Documents';
// import Home from '@pages/Home';
// import RA from '@pages/RA';

import { RootStackParamList } from '../App';

export type TabInfoType = {
  id: number;
  name: keyof RootStackParamList;
  focusedIcon: string;
  unfocusedIcon: string;
  component: () => JSX.Element;
};

export const tabItens: TabInfoType[] = [
  {
    id: 0,
    name: 'RA',
    focusedIcon: 'cube',
    unfocusedIcon: 'cube-outline',
    component: Documents,
  },
  {
    id: 1,
    name: 'Home',
    focusedIcon: 'home',
    unfocusedIcon: 'home-outline',
    component: Documents,
  },
  {
    id: 2,
    name: 'Documents',
    focusedIcon: 'document',
    unfocusedIcon: 'document-outline',
    component: Documents,
  },
];
