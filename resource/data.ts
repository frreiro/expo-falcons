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
      image: require('@assets/images/carro.png'),
      title: 'Protótipo 2022',
      documents: [
        {
          id: uuidv4(),
          type: 'tools',
          title: 'Manual de ferramentas',
          file_name: 'manual_de_ferramentas_2022.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2022/manual_de_ferramentas_2022.pdf',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2022/manual_de_ferramentas_2022_thumb.png',
        },
        {
          id: uuidv4(),
          type: 'assemblies',
          title: 'Manual de montagem',
          file_name: 'manual_de_montagem_2022.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2022/manual_de_montagem_2022.pdf',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2022/manual_de_montagem_2022_thumb.png',
        },
      ],
      augment_reality: [],
    },
    {
      id: uuidv4(),
      year: '2023',
      image: require('@assets/images/carro-2023.png'),
      title: 'Protótipo 2023',
      documents: [
        {
          id: uuidv4(),
          type: 'tools',
          title: 'Manual de ferramentas',
          file_name: 'manual_de_ferramentas_2023.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2023/manual_de_ferramentas_2023.pdf',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2023/manual_de_ferramentas_2023_thumb.png',
        },
        {
          id: uuidv4(),
          type: 'assemblies',
          title: 'Manual de montagem',
          file_name: 'manual_de_montagem_2023.pdf',
          file_url:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2023/manual_de_montagem_2023.pdf',
          file_thumb:
            'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/public/documents/years/2023/manual_de_montagem_2023_thumb.png',
        },
      ],
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
                path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/freio/breakdisk/breakdisk.obj?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZnJlaW8vYnJlYWtkaXNrL2JyZWFrZGlzay5vYmoiLCJpYXQiOjE2OTA4NjEwMDcsImV4cCI6MTcyMjM5NzAwN30.irGjmOuVSRgIxgGfIwCvoY7zrtNlKmKwtLFe_ybmvp4&t=2023-08-01T03%3A36%3A47.938Z',
                initialScale: 10,
              },
              material:
                'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/freio/breakdisk/breakdisk.mtl?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZnJlaW8vYnJlYWtkaXNrL2JyZWFrZGlzay5tdGwiLCJpYXQiOjE2OTA4NjA5NzUsImV4cCI6MTcyMjM5Njk3NX0.XtVMcYah30uOd4gOdVCujJSTcL6KTY1BQ2OCUHIbS3Y&t=2023-08-01T03%3A36%3A16.124Z',
              textures: [
                {
                  path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/freio/breakdisk/swsand_bump.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvZnJlaW8vYnJlYWtkaXNrL3N3c2FuZF9idW1wLmpwZyIsImlhdCI6MTY5MDg2MDk5NiwiZXhwIjoxNzIyMzk2OTk2fQ.obKj00HFfWdSPxg0XdlBbroKtlqhmzMQYyPvK4z4ooE&t=2023-08-01T03%3A36%3A37.148Z',
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
                path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/suspensao/volante/volante.obj?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvc3VzcGVuc2FvL3ZvbGFudGUvdm9sYW50ZS5vYmoiLCJpYXQiOjE2OTA4NjEwNDMsImV4cCI6MTcyMjM5NzA0M30.Pn73Nq4Zo3ggcpScsWye0bJkrmlp9_spYb7ViIj-lIM&t=2023-08-01T03%3A37%3A23.767Z',
                initialScale: 10,
              },
              material:
                'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/suspensao/volante/volante.mtl?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvc3VzcGVuc2FvL3ZvbGFudGUvdm9sYW50ZS5tdGwiLCJpYXQiOjE2OTA4NjEwMzIsImV4cCI6MTcyMjM5NzAzMn0.j6ErF_F78hCPQTUecry3oH3HvJ_T1S9HqDODYgcInP8&t=2023-08-01T03%3A37%3A12.950Z',
              textures: [
                {
                  path: 'https://zhsvzqsuzdnxigghqvms.supabase.co/storage/v1/object/sign/3ds/suspensao/volante/polished_cherry.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIzZHMvc3VzcGVuc2FvL3ZvbGFudGUvcG9saXNoZWRfY2hlcnJ5LmpwZyIsImlhdCI6MTY5MDg2MTAyMiwiZXhwIjoxNzIyMzk3MDIyfQ.1t78wm-qPAKaHtKfpLdWu47rLoNuVVo6KZleMJNGLn4&t=2023-08-01T03%3A37%3A03.197Z',
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
      ],
    },
  ],
};
export default Falcons;
