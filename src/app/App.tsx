import TabIconItem from '@components/TabIconItem';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { GlobalStyles } from '../styles/GlobalStyles';
import { TabInfoType, tabItens } from './data/TabItem';

export type RootStackParamList = {
  Home: undefined;
  RA: undefined;
  Documents: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Tabs({
  TabItens = tabItens,
}: {
  TabItens?: TabInfoType[];
}) {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
