import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import CustomSidebarMenu from "../AppMenu";
import BottomNavigationComponent from "../screens/BottomNavigation.component";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        headerTintColor: "white",
        headerTitleStyle: {
          display: "none",
        },
      }}
    >
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1B2346",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
        name="Services provided by SehhaCity"
        component={BottomNavigationComponent}
      />
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1B2346",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
        name="CallNow"
        component={ContactStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
