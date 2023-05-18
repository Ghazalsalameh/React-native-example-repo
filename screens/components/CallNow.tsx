import {  Text, View } from "react-native";

import { useGetAllDoctorsQuery } from "../../src/gql";

export const CallNow = () => {
  const { data } = useGetAllDoctorsQuery({
    variables: {
      first: 10
    }
  })
  const doctors = data?.doctors?.edges.map(doctor => doctor?.node)
  return (
    <View>

      <Text>Call Now Page</Text>
    </View>
  );
};
