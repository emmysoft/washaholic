import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}