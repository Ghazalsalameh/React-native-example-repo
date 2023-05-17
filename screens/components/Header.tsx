import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { headerStyles } from "../styles/header.styles";
import { OfferCardData } from "./OffersData.util";

const FirstPage = ({ navigation }) => {
  const ClickDeleteToDo = (id) => {
    console.log(id);
  };
  const handlePress = () => {
    console.log(navigation.navigate, "dsahd");
    navigation.navigate("ThirdPage");
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={headerStyles.header} />
        <View style={headerStyles.container}>
          <FlatList
            data={OfferCardData(ClickDeleteToDo)}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={headerStyles.cardContainer}>
                  <View style={{ marginTop: 20 }}>{item.icon}</View>
                  <Text style={headerStyles.itemTitle}>{item.title} </Text>
                  <Text style={headerStyles.description}>{item.subTitle} </Text>
                  <Pressable
                    style={{
                      backgroundColor: item.backgroundColor,
                      ...headerStyles.pressable,
                    }}
                    onPress={handlePress}
                  >
                    <Text style={headerStyles.buttonDetails}>
                      {item.buttonDetails}
                    </Text>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FirstPage;
