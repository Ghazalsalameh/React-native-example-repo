import { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { darkBlue, green, white } from "../../common/CommonColors";

import { useGetAllDoctorsQuery } from "../../src/gql";
import { CallType } from "./CallType";

export const CallNow= ({navigation}) => {
  const { data } = useGetAllDoctorsQuery({
    variables: {
      first: 10
    }
  })
  const doctors = data?.doctors?.edges.map(doctor => doctor?.node)
  const handlePressButton=()=>{
    navigation.navigate("doctors")
    console.log(navigation)
  }
  return (
    <View >
      <FlatList data={CallType}
        keyExtractor={(item) => item.id}
        scrollEnabled
        contentContainerStyle={{
          paddingBottom: 300,
        }}
        renderItem={({ item }) => {
          return (
            <>
              <View style={{
                borderRadius: 20,
                backgroundColor: "white",
                width: "95%",
                justifyContent: "space-between",
                alignItems: "center",
                height: 250,
                margin: 10,
                borderColor: "#F0FFFF",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                borderStyle: "solid",
                shadowRadius: 3,
                borderWidth: 1,
                padding: 10
              }} >
                <View style={{ marginVertical: 20 }}>{item.icon}</View>
                <Text style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: darkBlue,
                  textAlign: 'center',
                  width: '80%',
                }}>{item.title} </Text>
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: green,
                }}>{item.price}</Text>
                <Text style={{
                  fontSize: 14,
                  color: green
                }}>{item.date}</Text>

              </View>
              <Pressable
                style={{
                  backgroundColor: green,
                  width: "50%",
                  alignSelf: 'flex-start',
                  height: 30,
                  alignItems: 'center',
                  borderRadius: 20,
                  padding: 5,
                  margin: 2
                }}
                onPress={handlePressButton}

              >
                <Text style={{
                  backgroundColor: green,

                  textAlign: 'center',
                  color: white,
                  fontWeight: 'bold',

                }}>
                  {item.buttonDetails}
                </Text>
              </Pressable>
            </>
          );
        }} />

    </View>
  );
};
