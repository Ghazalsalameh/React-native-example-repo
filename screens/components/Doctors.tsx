import { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { darkBlue, green, white } from "../../common/CommonColors";

import { useGetAllDoctorsQuery } from "../../src/gql";


export const Doctors= () => {
  const { data } = useGetAllDoctorsQuery({
    variables: {
      first: 10
    }
  })
  const doctors = data?.doctors?.edges.map(doctor => doctor?.node)
 
  return (
    <View >
      <FlatList data={[]}
        keyExtractor={(item) => item.id}
        scrollEnabled
        contentContainerStyle={{
          paddingBottom: 300,
        }}
        renderItem={({ item }) => {
          return (
           <></>
          );
        }} />

    </View>
  );
};
