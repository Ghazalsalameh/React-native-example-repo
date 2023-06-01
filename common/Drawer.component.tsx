import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "../AppMenu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigationComponent from "../screens/BottomNavigation.component";
import NotificationsScreen from "../screens/components/Notifications";
import { darkBlue } from "./CommonColors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackButtonMenuEnabled: true,
        headerBackVisible: true,
        headerStyle: {
          backgroundColor: darkBlue,
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen name="FirstPage" component={BottomNavigationComponent} />
        <Stack.Screen name="CallNow" component={BottomNavigationComponent} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function DrawerComponent() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Services provided by SehhaCity"
        options={{
          headerStyle: {
            backgroundColor: "#1B2346",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
        component={FirstScreenStack}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          headerStyle: {
            backgroundColor: "#1B2346",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
        component={NotificationsScreen}
      />
    </Drawer.Navigator>
  );
}
