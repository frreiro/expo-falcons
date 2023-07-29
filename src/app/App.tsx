import Tabs, { RootBottomParamList } from '@components/TabItens/index';
import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { PDFInfo } from './components/PDF';
import PDFIos from './components/PDF/PDFios';
import { fonts } from './data/fontsData';
import ReduxProvider from './providers';

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  App: RootBottomParamList;
  Webview: PDFInfo;
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <ReduxProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="App"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="App" component={Tabs} />
            <Stack.Screen
              name="Webview"
              component={PDFIos}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
  },
});
