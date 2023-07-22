import Header from '@components/Header';
import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles';

export default function MainLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  console.log();
  return (
    <>
      <StatusBar style="light" backgroundColor={GlobalStyles.colors.primary} />
      <Header title={title} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
}
