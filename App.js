import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import Password from "./screens/Password";
import HomePage from "./screens/HomePage";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto": require("./assets/Roboto/Roboto-Black.ttf"),
    "roboto-bold": require("./assets/Roboto/Roboto-Bold.ttf"),
    "roboto-italic": require("./assets/Roboto/Roboto-Italic.ttf"),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerStyle: {
                backgroundColor: "#e5e5e5",
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: "#e5e5e5",
              },
            }}
          />
          <Stack.Screen 
            name="Signup"
            component={SignUp}
            options={{
              headerStyle: {
                backgroundColor: "#e5e5e5",
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerStyle: {
                backgroundColor: "#e5e5e5",
              },
            }}
          />
          <Stack.Screen
            name="Forgot Password"
            component={Password}
            options={{
              headerStyle: {
                backgroundColor: "#e5e5e5",
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerStyle: { backgroundColor: "#e5e5e5" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
