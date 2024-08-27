import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider as AtomProvider } from "jotai";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import useProtectedRoute from "@/hooks/useProtectedRoute";

export default function RootLayout() {
  const { isNavigationReady } = useProtectedRoute();
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AtomProvider>
        {isNavigationReady ? (
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
          </Stack>
        ) : (
          <Slot />
        )}
      </AtomProvider>
    </GestureHandlerRootView>
  );
}
