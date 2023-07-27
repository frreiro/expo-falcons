import { RootBottomParamList } from '@components/TabItens';
import Objects from '@pages/3D';
import Documents from '@pages/Documents';
import Home from '@pages/Home';

export type TabInfoType = {
  id: number;
  name: keyof RootBottomParamList;
  focusedIcon: string;
  unfocusedIcon: string;
  component: () => JSX.Element;
};

export const tabItens: TabInfoType[] = [
  {
    id: 0,
    name: 'Objects',
    focusedIcon: 'cube',
    unfocusedIcon: 'cube-outline',
    component: Objects,
  },
  {
    id: 1,
    name: 'Home',
    focusedIcon: 'home',
    unfocusedIcon: 'home-outline',
    component: Home,
  },
  {
    id: 2,
    name: 'Documents',
    focusedIcon: 'document',
    unfocusedIcon: 'document-outline',
    component: Documents,
  },
];
