import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { Canvas } from '@react-three/fiber/native';
import { ObjectInfo } from '@resource/data';
import { Suspense, useEffect } from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';

import Model from '../Model';
import ModelTexture from '../ModelTexture';

export type GestureHandlerProps = {
  object: ObjectInfo;
};

export default function GestureHandler(props: GestureHandlerProps) {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const startPan = useSharedValue({ x: 0, y: 0 });
  const panGesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + startPan.value.x,
        y: e.translationY + startPan.value.y,
      };
    })
    .onEnd(() => {
      startPan.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const zoom = useSharedValue(props.object.obj.initialScale);

  useEffect(() => {
    zoom.value = props.object.obj.initialScale;
  }, [props.object.obj.initialScale]);

  const startZoom = useSharedValue(0);

  const pintchGesture = Gesture.Pinch()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onStart(e => {
      zoom.value = startZoom.value;
    })
    .onUpdate(e => {
      zoom.value = e.scale * props.object.obj.initialScale;
    })
    .onEnd(() => {
      startZoom.value = zoom.value;
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const composed = Gesture.Simultaneous(panGesture, pintchGesture);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GestureDetector gesture={composed}>
          <Animated.View style={{ flex: 1 }}>
            <Canvas
              legacy={true}
              style={{ backgroundColor: GlobalStyles.colors.primary }}>
              <Suspense fallback={null}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {props.object.textures.length ? (
                  <ModelTexture
                    object={props.object}
                    offset={offset}
                    zoom={zoom}
                  />
                ) : (
                  <Model object={props.object} offset={offset} zoom={zoom} />
                )}
              </Suspense>
            </Canvas>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  );
}
