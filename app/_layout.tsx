import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#020202" }}>
      <StatusBar barStyle="light-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  )
}
