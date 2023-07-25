import { useProgress } from '@react-three/drei/native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export default function Loading() {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<LottieView>(null);

  const { active, loaded, total } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    animationRef.current?.play();
    if (loaded !== total) return clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [active]);

  return (
    <>
      {isLoading && (
        <View style={styles.container}>
          <LottieView
            autoPlay
            loop
            ref={animationRef}
            style={{
              width: 200,
              height: 200,
            }}
            source={require('@assets/loaders/animation_cube.json')}
          />
        </View>
      )}
    </>
  );
}
