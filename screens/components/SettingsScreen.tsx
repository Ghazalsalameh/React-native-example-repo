import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";
import { orange } from "../../common/CommonColors";

const SettingsPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Settings Page
          </Text>
          <Button
            color={orange}
            onPress={() => navigation.navigate("Home")}
            title="Go to Home Page"
          />
          <Button
            onPress={() => navigation.navigate("Profile")}
            title="Go to Profile Page"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsPage;
