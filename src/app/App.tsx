import Tabs from '@components/TabItens/index';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Handjet-Regular': require('../../assets/fonts/Handjet-Regular.ttf'),
    'HandjetCircle-Black': require('../../assets/fonts/HandjetCircle-Black.ttf'),
    'HandjetCircle-Bold': require('../../assets/fonts/HandjetCircle-Bold.ttf'),
    'HandjetCircle-Extralight': require('../../assets/fonts/HandjetCircle-Extralight.ttf'),
    'HandjetCircleDouble-Light': require('../../assets/fonts/HandjetCircleDouble-Light.ttf'),
    'HandjetCircleDouble-Semibold': require('../../assets/fonts/HandjetCircleDouble-Semibold.ttf'),
    'HandjetCircleDouble-Thin': require('../../assets/fonts/HandjetCircleDouble-Thin.ttf'),
    'HandjetFlowerDouble-Medium': require('../../assets/fonts/HandjetFlowerDouble-Medium.ttf'),
    'HandjetHeartDouble-Extrabold': require('../../assets/fonts/HandjetHeartDouble-Extrabold.ttf'),
    'ShareTechMono-Regular': require('../../assets/fonts/ShareTechMono-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
