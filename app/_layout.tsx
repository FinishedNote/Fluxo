import { Redirect, Slot, useSegments } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  const isAuthenticated = false; // ta vraie logique ici
  const segments = useSegments();

  // Vérifie si on est dans le groupe auth
  const inAuthGroup = segments[0] === "(auth)";

  // Si pas authentifié et pas dans le groupe auth → redirige vers sign-up
  if (!isAuthenticated && !inAuthGroup) {
    return <Redirect href="/(auth)/sign-up" />;
  }

  // Si authentifié et on est dans le groupe auth → renvoie vers les tabs
  if (isAuthenticated && inAuthGroup) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#020202" }}>
      <StatusBar barStyle="light-content" />
      <Slot />
    </SafeAreaView>
  );
}
