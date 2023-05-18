import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CallNow } from "../screens/components/CallNow";
import ChatScreen from "../screens/components/Chat";
import HomePage from "../screens/components/HomePage";
import ProfileScreen from "../screens/components/ProfileScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

function ContactStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CallNow" component={CallNow} />
    </Stack.Navigator>
  );
}
export { MainStackNavigator, ContactStackNavigator };
