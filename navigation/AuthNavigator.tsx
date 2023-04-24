import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import JoinScreen from "../screens/JoinScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreenUser from "../screens/LoginScreenUser";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Join" component={HomeScreen} />
      <Stack.Screen name="UserLogin" component={LoginScreenUser} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}