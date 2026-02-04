import { COLORS } from '@/constants/theme';
import { ProgressProvider } from '@/context/ProgressContext';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Fonts removed to fix build error

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: COLORS.background,
      card: COLORS.card,
      text: COLORS.text,
      border: COLORS.cardBorder,
    },
  };

  return (
    <ProgressProvider>
      <ThemeProvider value={MyDarkTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: COLORS.background },
            animation: 'slide_from_right',
            animationDuration: 300,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              animation: 'fade',
            }}
          />
          <Stack.Screen
            name="levels/index"
            options={{
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="lessons/[levelId]"
            options={{
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="lesson/[lessonId]"
            options={{
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen
            name="quiz/[lessonId]"
            options={{
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen
            name="complete/index"
            options={{
              animation: 'fade',
              animationDuration: 500,
            }}
          />
        </Stack>
        <StatusBar style="light" />
      </ThemeProvider>
    </ProgressProvider>
  );
}
