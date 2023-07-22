import { registerRootComponent } from 'expo';

import App from './src/app/App';

registerRootComponent(App);

// import Index from '@app/Index';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     'Handjet-Regular': require('./assets/fonts/Handjet-Regular.ttf'),
//   });

//   const onLayoutRootView = React.useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <StatusBar style="auto" />
//       <Index />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
