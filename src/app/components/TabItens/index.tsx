import { TabInfoType, tabItens } from '@app/data/TabItemData';
import TabIconItem from '@components/TabIconItem';
import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { PDFInfo } from '../PDF';

export type RootBottomParamList = {
  Home: undefined;
  Objects: undefined;
  Documents: undefined;
  Webview?: PDFInfo;
};

const Tab = createBottomTabNavigator<RootBottomParamList>();

export default function Tabs({
  TabItens = tabItens,
}: {
  TabItens?: TabInfoType[];
}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GlobalStyles.colors.primary,
        tabBarInactiveTintColor: GlobalStyles.colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.secondary },
      }}>
      {TabItens.map(tab => {
        return (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({ color, focused, size }) => (
                <TabIconItem
                  id={tab.id}
                  size={size}
                  color={color}
                  focused={focused}
                  focusedIconName={tab.focusedIcon}
                  unfocusedIconName={tab.unfocusedIcon}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
