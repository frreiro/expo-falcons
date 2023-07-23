import Header from '@components/Header';
import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles';

export default function MainLayout({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
}) {
  console.log();
  return (
    <>
      <StatusBar style="light" backgroundColor={GlobalStyles.colors.primary} />
      <Header title={title} subtitle={subtitle} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
}
