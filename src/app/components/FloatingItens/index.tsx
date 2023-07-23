import { styles } from '@components/FloatingButton/styles';
import { GlobalStyles } from '@globalStyle/GlobalStyles';
import React from 'react';
import {
  Animated,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FloatingItem({
  animate,
  primitivePosition,
  iconName,
}: {
  animate: Animated.Value;
  primitivePosition: number;
  iconName: string;
}) {
  const subMenuAnimationStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
    transform: [
      { scale: animate },
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -62 * primitivePosition],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback>
      <Animated.View
        style={[styles.button, styles.submenu, subMenuAnimationStyle]}>
        <Icon name={iconName} size={20} color={GlobalStyles.colors.primary} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
