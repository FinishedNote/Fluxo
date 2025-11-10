import { Redirect, Slot, useSegments } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  const isAuthenticated = false; // replace with auth logic
  const segments = useSegments();

  const inAuthGroup = segments[0] === "(auth)";

  if (!isAuthenticated && !inAuthGroup) {
    return <Redirect href="/(auth)/sign-up" />;
  }

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
