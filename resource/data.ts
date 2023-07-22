import { ImageRequireSource } from 'react-native';

export type AugmentReality = {
  electrical: [];
  powertrain: [];
  chassis: [];
  suspension: [];
  brake: [];
  aerodynamic: [];
};

export type Documents = {
  id: number;
  title: string;
  file_name: string;
  file_thumb: string;
  file_url: string;
  type: 'tools' | 'assemblies';
};

export type YearsData = {
  id: number;
  year: string;
  image: ImageRequireSource;
  title: string;
  documents: Documents[];
  augment_reality: AugmentReality;
};

export interface IFalcons {
  years: YearsData[];
}

const Falcons: IFalcons = {
  years: [
    {
      id: 0,
      year: '2022',
      image: require('../assets/images/carro.png'),
      title: 'Protótipo 2022',
      documents: [
        {
          id: 0,
          type: 'tools',
          title: 'Manual de ferramentas',
          file_name: 'manual_de_ferramentas_2022.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_ferramentas_2022.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX2ZlcnJhbWVudGFzXzIwMjIucGRmIiwiaWF0IjoxNjkwMDY3MDUxLCJleHAiOjE3MjE2MDMwNTF9.rYsmB0ZoGrwr1U8wWzV7agFTmv2ME_CLclNlO4HsqFo&t=2023-07-22T23%3A04%3A13.103Z',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_ferramentas_2022_thumb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX2ZlcnJhbWVudGFzXzIwMjJfdGh1bWIucG5nIiwiaWF0IjoxNjkwMDY2NDI3LCJleHAiOjE3MjE2MDI0Mjd9.n3YWbO2sC4nri8XQqcRzZHNyBg7gSqS3uro5RlXOQ_A&t=2023-07-22T22%3A53%3A48.258Z',
        },
        {
          id: 1,
          type: 'assemblies',
          title: 'Manual de montagem',
          file_name: 'manual_de_montagem_2022.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_montagem_2022.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX21vbnRhZ2VtXzIwMjIucGRmIiwiaWF0IjoxNjkwMDY3MDY5LCJleHAiOjE3MjE2MDMwNjl9.up4YTIDCzaXFI4fJ17XNcd5xjcx50jDY4wE3DetOOd4&t=2023-07-22T23%3A04%3A30.974Z',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_montagem_2022_thumb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX21vbnRhZ2VtXzIwMjJfdGh1bWIucG5nIiwiaWF0IjoxNjkwMDY2NTkwLCJleHAiOjE3MjE2MDI1OTB9.JUi2IU-ikzJACO2ucBHcH8gI6OSf6KVhd89Y0FdxTgM&t=2023-07-22T22%3A56%3A31.941Z',
        },
      ],
      augment_reality: {
        electrical: [],
        powertrain: [],
        chassis: [],
        suspension: [],
        brake: [],
        aerodynamic: [],
      },
    },
    {
      id: 1,
      year: '2023',
      image: require('../assets/images/carro.png'),
      title: 'Protótipo 2023',
      documents: [],
      augment_reality: {
        electrical: [],
        powertrain: [],
        chassis: [],
        suspension: [],
        brake: [],
        aerodynamic: [],
      },
    },
  ],
};
export default Falcons;
