import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export type TabIconItemProps = {
  focusedIconName: string;
  unfocusedIconName: string;
  color: string;
  size: number;
  focused: boolean;
  id?: number;
};

export default function TabIconItem({
  focusedIconName,
  unfocusedIconName,
  color,
  size,
  focused,
  id,
}: TabIconItemProps) {
  return focused ? (
    <Icon
      testID={'focusedIcon_'.concat(String(id))}
      name={focusedIconName}
      color={color}
      size={size}
    />
  ) : (
    <Icon
      testID={'unfocusedIcon_'.concat(String(id))}
      name={unfocusedIconName}
      color={color}
      size={size}
    />
  );
}
