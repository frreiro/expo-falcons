import Header from '@components/Header';
import { GlobalStyles } from '@globalStyle/GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import React, { ReactNode, useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';

type ErrorState = {
  condition: boolean;
  message: string;
};

export type MainLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
  error?: ErrorState;
};

export default function MainLayout({
  children,
  title,
  subtitle,
  error,
}: MainLayoutProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error) {
      setHasError(error?.condition);
    }
  }, [error?.condition]);
  return (
    <>
      <StatusBar style="light" backgroundColor={GlobalStyles.colors.primary} />
      <Header title={title} subtitle={subtitle} />
      <SafeAreaView style={styles.container}>
        {hasError ? (
          <View style={styles.container_no_content}>
            <Text style={styles.text_no_content}>{error?.message}</Text>
          </View>
        ) : (
          children
        )}
      </SafeAreaView>
    </>
  );
}
