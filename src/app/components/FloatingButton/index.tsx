import { SubMenuItem } from '@app/data/FloatingItemData';
import { GlobalStyles } from '@globalStyle/GlobalStyles';
import React, { useRef } from 'react';
import {
  Animated,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FloatingItem from '../FloatingItens';
import { styles } from './styles';

export interface IFloatingButton<T extends unknown> {
  style: ViewStyle;
  submenuItems: T[];
  menuIcon: string;
  selectSubItem: (item: T) => void;
}

export default function FloatingButton<K extends SubMenuItem>({
  style,
  submenuItems,
  menuIcon,
  selectSubItem,
}: IFloatingButton<K>) {
  const isOpen = useRef(false);
  const animate = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = isOpen.current ? 0 : 1;

    Animated.spring(animate, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    isOpen.current = !isOpen.current;
  };

  const menuAnimationStyle: Animated.AnimatedProps<StyleProp<ViewStyle>> = {
    transform: [
      {
        scale: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.1],
        }),
      },
    ],
  };
  return (
    <View style={[styles.container, style]}>
      {submenuItems.map((item, index) => {
        return (
          <FloatingItem
            key={item.id}
            animate={animate}
            selectSubItem={selectSubItem}
            primitivePosition={index + 1}
            item={item}
          />
        );
      })}

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, menuAnimationStyle]}>
          <Icon name={menuIcon} size={25} color={GlobalStyles.colors.primary} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
