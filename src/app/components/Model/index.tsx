import { useFrame, useLoader } from '@react-three/fiber/native';
import { ObjectInfo } from '@resource/data';
import { THREE } from 'expo-three';
import { useRef } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { Mesh } from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

type ModelProps = {
  object: ObjectInfo;
  offset: SharedValue<{ x: number; y: number }>;
  zoom: SharedValue<number>;
};

export default function Model(props: ModelProps) {
  const meshRef = useRef<Mesh>(null);

  const material = useLoader(
    MTLLoader,
    props.object.material,
  ) as MTLLoader.MaterialCreator;
  const obj = useLoader(OBJLoader, props.object.obj.path, loader => {
    material.preload();
    loader.setMaterials(material);
  }) as THREE.Group;

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
