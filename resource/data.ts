import { ImageRequireSource } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export type Mapping = 'bumpMap' | 'map' | 'normalMap' | 'roughnessMap';

export type Texture = {
  path: string;
  type: Mapping;
};

export type Object3D = {
  path: string;
  initialScale: number;
};

export type ObjectInfo = {
  id: string;
  iconName: string;
  name: string;
  obj: Object3D;
  material: string;
  textures: Texture[];
};

export type SectorInfo = {
  id: string;
  sectorName: string;
  iconName: string;
  objects: ObjectInfo[];
};

export type Documents = {
  id: string;
  title: string;
  file_name: string;
  file_thumb: string;
  file_url: string;
  type: 'tools' | 'assemblies';
};

export type YearsData = {
  id: string;
  year: string;
  image: ImageRequireSource;
  title: string;
  documents: Documents[];
  augment_reality: SectorInfo[];
};

export interface IFalcons {
  years: YearsData[];
}

const Falcons: IFalcons = {
  years: [
    {
      id: uuidv4(),
      year: '2022',
      image: require('../assets/images/carro.png'),
      title: 'Protótipo 2022',
      documents: [
        {
          id: uuidv4(),
          type: 'tools',
          title: 'Manual de ferramentas',
          file_name: 'manual_de_ferramentas_2022.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_ferramentas_2022.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX2ZlcnJhbWVudGFzXzIwMjIucGRmIiwiaWF0IjoxNjkwMDY3MDUxLCJleHAiOjE3MjE2MDMwNTF9.rYsmB0ZoGrwr1U8wWzV7agFTmv2ME_CLclNlO4HsqFo&t=2023-07-22T23%3A04%3A13.103Z',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_ferramentas_2022_thumb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX2ZlcnJhbWVudGFzXzIwMjJfdGh1bWIucG5nIiwiaWF0IjoxNjkwMDY2NDI3LCJleHAiOjE3MjE2MDI0Mjd9.n3YWbO2sC4nri8XQqcRzZHNyBg7gSqS3uro5RlXOQ_A&t=2023-07-22T22%3A53%3A48.258Z',
        },
        {
          id: uuidv4(),
          type: 'assemblies',
          title: 'Manual de montagem',
          file_name: 'manual_de_montagem_2022.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_montagem_2022.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX21vbnRhZ2VtXzIwMjIucGRmIiwiaWF0IjoxNjkwMDY3MDY5LCJleHAiOjE3MjE2MDMwNjl9.up4YTIDCzaXFI4fJ17XNcd5xjcx50jDY4wE3DetOOd4&t=2023-07-22T23%3A04%3A30.974Z',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/documents/manual_de_montagem_2022_thumb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudHMvbWFudWFsX2RlX21vbnRhZ2VtXzIwMjJfdGh1bWIucG5nIiwiaWF0IjoxNjkwMDY2NTkwLCJleHAiOjE3MjE2MDI1OTB9.JUi2IU-ikzJACO2ucBHcH8gI6OSf6KVhd89Y0FdxTgM&t=2023-07-22T22%3A56%3A31.941Z',
        },
      ],
      augment_reality: [
        // electrical: [],
        // powertrain: [],
        // chassis: [],
        // suspension: [],
        // brake: {
        //   iconName: 'tire',
        //   objects: [
        //     {
        //       name: 'Disco de freio',
        //       obj: require('@assets/obj/breakdisk/breakdisk.obj'),
        //       material: require('@assets/obj/breakdisk/breakdisk.mtl'),
        //       texture: require('@assets/obj/breakdisk/swsand_bump.jpg'),
        //     },
        //   ],
        // },
        // aerodynamic: [],
      ],
    },
    {
      id: uuidv4(),
      year: '2023',
      image: require('../assets/images/carro.png'),
      title: 'Protótipo 2023',
      documents: [],
      augment_reality: [
        {
          id: uuidv4(),
          sectorName: 'Freio',
          iconName: 'tire',
          objects: [
            {
              id: uuidv4(),
              iconName: 'alpha-a-circle',
              name: 'Disco de freio',
              obj: {
                path: require('@assets/obj/breakdisk/breakdisk.obj'),
                initialScale: 10,
              },
              material: require('@assets/obj/breakdisk/breakdisk.mtl'),
              textures: [
                {
                  path: require('@assets/obj/breakdisk/swsand_bump.jpg'),
                  type: 'bumpMap',
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          sectorName: 'Suspensão',
          iconName: 'vector-triangle',
          objects: [
            {
              id: uuidv4(),
              iconName: 'alpha-a-circle',
              name: 'Volante',
              obj: {
                path: require('@assets/obj/volante/volante.obj'),
                initialScale: 10,
              },
              material: require('@assets/obj/volante/volante.mtl'),
              textures: [
                {
                  path: require('@assets/obj/volante/polished_cherry.jpg'),
                  type: 'map',
                },
              ],
            },
            {
              id: uuidv4(),
              iconName: 'alpha-b-circle',
              name: 'Armotecedor',
              obj: {
                path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/suspensao/armotecedor/amortecedor.obj?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvc3VzcGVuc2FvL2FybW90ZWNlZG9yL2Ftb3J0ZWNlZG9yLm9iaiIsImlhdCI6MTY5MDMzMDIzMywiZXhwIjoxNzIxODY2MjMzfQ.btF05tUmxDvwhyhUCxiICAe1H--1aeG9prk8OzA6oVU&t=2023-07-26T00%3A10%3A34.002Z',
                initialScale: 10,
              },
              material:
                'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/suspensao/armotecedor/amortecedor.mtl?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvc3VzcGVuc2FvL2FybW90ZWNlZG9yL2Ftb3J0ZWNlZG9yLm10bCIsImlhdCI6MTY5MDMzMDI0NCwiZXhwIjoxNzIxODY2MjQ0fQ.7--WP6lLlAaWk_7vR4vN7UR8dX7IW-2l_zyFZDIJbBY&t=2023-07-26T00%3A10%3A44.883Z',
              textures: [
                {
                  path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/suspensao/armotecedor/checker.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvc3VzcGVuc2FvL2FybW90ZWNlZG9yL2NoZWNrZXIuanBnIiwiaWF0IjoxNjkwMzMwMjU3LCJleHAiOjE3MjE4NjYyNTd9.pFXYBm8qMHYuhZ14wvt9UdP3MkNzG1hKZA6COSvQvXM&t=2023-07-26T00%3A10%3A58.193Z',
                  type: 'normalMap',
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          sectorName: 'Aerodinâmica',
          iconName: 'feather',
          objects: [
            {
              id: uuidv4(),
              iconName: 'alpha-a-circle',
              name: 'Asa Dianteira',
              obj: {
                path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/aero/asad/asad.obj?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvYWVyby9hc2FkL2FzYWQub2JqIiwiaWF0IjoxNjkwMzI1MDY5LCJleHAiOjE3MjE4NjEwNjl9.VFcIyFAboBmUw-MXBfGAooWGsSvKfq9VRWNsQUuZ_FI&t=2023-07-25T22%3A44%3A29.431Z',
                initialScale: 3,
              },
              material:
                'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/aero/asad/asad.mtl?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvYWVyby9hc2FkL2FzYWQubXRsIiwiaWF0IjoxNjkwMzI1MDQxLCJleHAiOjE3MjE4NjEwNDF9.uM4LRrvelbzGWeWCVhUr9NjfWHdvDobyZRb0X6gZXqo&t=2023-07-25T22%3A44%3A01.357Z',
              textures: [],
            },
          ],
        },
        {
          id: uuidv4(),
          sectorName: 'Elétrica',
          iconName: 'flash',
          objects: [
            {
              id: uuidv4(),
              iconName: 'alpha-a-circle',
              name: 'Luz de Freio',
              obj: {
                path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/eletrica/luzdefreio/luzdefreio.obj?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZWxldHJpY2EvbHV6ZGVmcmVpby9sdXpkZWZyZWlvLm9iaiIsImlhdCI6MTY5MDMzMzQyNSwiZXhwIjoxNzIxODY5NDI1fQ.9DpmlqFiW2fNtnZAZOitKye-mF1qMZSS_7pUxe8AIhg&t=2023-07-26T01%3A03%3A46.073Z',
                initialScale: 10,
              },
              material:
                'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/eletrica/luzdefreio/luzdefreio.mtl?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZWxldHJpY2EvbHV6ZGVmcmVpby9sdXpkZWZyZWlvLm10bCIsImlhdCI6MTY5MDMzMzQwNSwiZXhwIjoxNzIxODY5NDA1fQ.PlzKfFZLXJQCJWKmYb9QG2BTk_xyn0DDrb4xR1GVymc&t=2023-07-26T01%3A03%3A26.181Z',
              textures: [],
            },
            {
              id: uuidv4(),
              iconName: 'alpha-b-circle',
              name: 'Master Switch',
              obj: {
                path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/eletrica/masterswitch/masterswitch.obj?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZWxldHJpY2EvbWFzdGVyc3dpdGNoL21hc3RlcnN3aXRjaC5vYmoiLCJpYXQiOjE2OTAzMjc4NzcsImV4cCI6MTcyMTg2Mzg3N30.lyy84AIbY-VbG0rw6buTvO3u2twChCItxsw3munoV6o&t=2023-07-25T23%3A31%3A17.603Z',
                initialScale: 10,
              },
              material:
                'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/eletrica/masterswitch/masterswitch.mtl?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZWxldHJpY2EvbWFzdGVyc3dpdGNoL21hc3RlcnN3aXRjaC5tdGwiLCJpYXQiOjE2OTAzMjc4NTYsImV4cCI6MTcyMTg2Mzg1Nn0.DAXbWpruEfkYaI5Bn1zYweHdGnYr5ccMqwl8ZaJlVXk&t=2023-07-25T23%3A30%3A57.088Z',
              textures: [
                {
                  path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/eletrica/masterswitch/cf_epoxy_bump.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZWxldHJpY2EvbWFzdGVyc3dpdGNoL2NmX2Vwb3h5X2J1bXAuanBnIiwiaWF0IjoxNjkwMzI4MTMwLCJleHAiOjE3MjE4NjQxMzB9.NE-sK7SQNSt7CzfEYDmmAlKsvUQFO4Ggtm1oqYIBtIc&t=2023-07-25T23%3A35%3A30.797Z',
                  type: 'normalMap',
                },
                {
                  path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/eletrica/masterswitch/carbon_fiber_eproxy.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZWxldHJpY2EvbWFzdGVyc3dpdGNoL2NhcmJvbl9maWJlcl9lcHJveHkuanBnIiwiaWF0IjoxNjkwMzI5MTA2LCJleHAiOjE3MjE4NjUxMDZ9.v5LdPmvaM77NeDAY8Yw9lzrC0wbJ4HFcc8hH5M9F_Nw&t=2023-07-25T23%3A51%3A46.339Z',
                  type: 'bumpMap',
                },
              ],
            },
          ],
        },
        // electrical: [],
        // powertrain: [],
        // chassis: [],
        // suspension: [],
        // brake: {
        //   iconName: 'tire',
        //   objects: [
        //     {
        //       name: 'Disco de freio',
        //       obj: require('@assets/obj/breakdisk/breakdisk.obj'),
        //       material: require('@assets/obj/breakdisk/breakdisk.mtl'),
        //       texture: require('@assets/obj/breakdisk/swsand_bump.jpg'),
        //     },
        //   ],
        // },
        // aerodynamic: [],
      ],
    },
  ],
};
export default Falcons;
