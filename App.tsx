import "react-native-gesture-handler";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import DrawerComponent from "./common/Drawer.component";
import { MyTheme } from "./common/Theme";

const client = new ApolloClient({
  uri: "https://api.sk-dev.sehacity.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <DrawerComponent />
        </ApolloProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
