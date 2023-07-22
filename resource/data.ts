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
  type: 'tools' | 'assemblies';
};

export type YearsData = {
  id: number;
  year: string;
  image: string;
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
      image: '',
      title: 'Protótipo 2022',
      documents: [
        {
          id: 0,
          type: 'tools',
          title: 'Manual de ferramentas',
          file_name: 'manual_de_ferramentas_2022.pdf',
        },
        {
          id: 1,
          type: 'assemblies',
          title: 'Manual de montagem',
          file_name: 'manual_de_montagem_2022.pdf',
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
      image: '',
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
