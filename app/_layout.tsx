import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  console.error("EXPO_PUBLIC_CONVEX_URL is not set! The app will not work without it.");
}

const convex = convexUrl 
  ? new ConvexReactClient(convexUrl, {
      unsavedChangesWarning: false,
    })
  : null;

export default function RootLayout() {
  // Show error screen if Convex URL is missing
  if (!convex) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Configuration Error</Text>
        <Text style={styles.errorMessage}>
          Convex URL is not configured. Please rebuild the app with the correct environment variables.
        </Text>
      </View>
    );
  }

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ef4444",
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
  },
});