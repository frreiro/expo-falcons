import { SubMenuItem } from '@app/data/FloatingItemData';
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

export interface IFloatingItem<T extends unknown> {
  animate: Animated.Value;
  primitivePosition: number;
  item: T;
  selectSubItem: (item: T) => void;
}

export default function FloatingItem<K extends SubMenuItem>({
  animate,
  primitivePosition,
  item,
  selectSubItem,
}: IFloatingItem<K>) {
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
    <TouchableWithoutFeedback onPress={() => selectSubItem(item)}>
      <Animated.View
        style={[styles.button, styles.submenu, subMenuAnimationStyle]}>
        <Icon
          name={item.iconName}
          size={20}
          color={GlobalStyles.colors.primary}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
