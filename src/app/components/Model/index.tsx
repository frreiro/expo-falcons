import { useFrame, useLoader } from '@react-three/fiber/native';
import { THREE, TextureLoader } from 'expo-three';
import { useLayoutEffect, useRef } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { Mesh } from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

type ModelProps = {
  offset: SharedValue<{ x: number; y: number }>;
  zoom: SharedValue<number>;
};

export default function Model(props: ModelProps) {
  const meshRef = useRef<Mesh>(null);

  const material = useLoader(
    MTLLoader,
    require('@assets/obj/breakdisk/breakdisk.mtl'),
  ) as MTLLoader.MaterialCreator;
  const obj = useLoader(
    OBJLoader,
    require('@assets/obj/breakdisk/breakdisk.obj'),
    loader => {
      material.preload();
      loader.setMaterials(material);
    },
  ) as THREE.Group;

  const colorMap = useLoader(
    TextureLoader,
    require('@assets/obj/breakdisk/swsand_bump.jpg'),
  );

  useLayoutEffect(() => {
    obj.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.material.bumpMap = colorMap;
      }
    });
  }, [obj]);

  useFrame((state, delta) => {
    const x = (props.offset.value.x * 100) / 5000;
    const y = (props.offset.value.y * 100) / 5000;

    if (meshRef.current) {
      meshRef.current.rotation.x = y;
      meshRef.current.rotation.y = x;
      meshRef.current.scale.setScalar(props.zoom.value);
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.5, 0, 0]}>
      <primitive object={obj} />
    </mesh>
  );
}