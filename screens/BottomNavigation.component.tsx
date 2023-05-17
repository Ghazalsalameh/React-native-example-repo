import React, { FC } from "react";
import FirstPage from "./components/Header";
import ThirdPage from "./components/ThirdPage";
import SecondPage from "./components/Todo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { darkBlue, orange, white } from "../common/CommonColors";
import SettingsScreen from "./components/SettingsScreen";
import ProfileScreen from "./components/ProfileScreen";
import NotificationsScreen from "./components/Notifications";
import ChatScreen from "./components/Chat";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "expo-vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNavigationComponent() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          display: "none",
        },

        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: white,
          height: 90,
          borderRadius: 40,
          ...BottomNavigationStyles.shadow,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name="settings"
                size={24}
                color={focused ? orange : darkBlue}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="user"
                size={25}
                color={focused ? orange : darkBlue}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={FirstPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: darkBlue,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <AntDesign name="appstore-o" size={24} color={white} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name="bell"
                size={25}
                color={focused ? orange : darkBlue}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ThirdPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color={focused ? orange : darkBlue}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const BottomNavigationStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#1B23460A",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 30,
  },
});
