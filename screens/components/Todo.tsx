// import {
//   Button,
//   FlatList,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { TextInput } from "react-native-paper";
// import { gql, useLazyQuery, useQuery } from "@apollo/client";

// export const Todos = () => {
//   const [getQuery, { data }] = useLazyQuery(gql`
//     query cities($first: Int) {
//       cities(first: $first) {
//         edges {
//           node {
//             id
//             name
//           }
//         }
//       }
//     }
//   `);
//   const [todo, setTodos] = useState([
//     { id: "1", name: "fold laundry" },
//     { id: "2", name: "take out trash" },
//     { id: "3", name: "make lunch" },
//     { id: "4", name: "buy coffee " },
//     { id: "5", name: "create app" },
//     { id: "6", name: "play fifa" },
//     { id: "7", name: "play tennis" },
//     { id: "8", name: "clean house" },
//   ]);
//   const ClickDeleteToDo = (id) => {
//     setTodos((prev) => prev?.filter((item) => item?.id != id));
//   };
//   return (
//     <ScrollView>
//       <View style={styles.todos}>
//         <SafeAreaView style={styles.safeArea}>
//           <TextInput style={styles.text} />
//           <Pressable
//             accessibilityLabel="Go"
//             accessibilityRole="button"
//             onPress={() => getQuery({ variables: { first: 10 } })}
//           >
//             <Text style={styles.button}>GO!</Text>
//           </Pressable>
//         </SafeAreaView>
//         <FlatList
//           keyExtractor={(item) => item.id}
//           data={todo}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => ClickDeleteToDo(item.id)}>
//               <Text style={styles.item}>{item.name}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   item: {
//     marginTop: 16,
//     padding: 16,
//     fontSize: 20,
//     borderStyle: "dashed",
//     borderRadius: 10,
//     borderColor: "#bbbb",
//     borderWidth: 1,
//   },
//   todos: {
//     flexDirection: "column",
//   },
//   safeArea: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "grey",
//   },
//   text: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 8,
//     borderBottomLeftRadius: 8,
//     padding: 8,
//   },
//   button: {
//     textAlign: "center",
//     backgroundColor: "orange",
//     borderTopLeftRadius: 8,
//     borderBottomLeftRadius: 8,
//     padding: 8,
//     borderRadius: 0,
//     height: 44,
//     width: 44,
//   },
// });

// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const SecondPage = ({ navigation }) => {
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
            This is Second Page under Second Page Option
          </Text>
          <Button
            title="Go to First Page"
            onPress={() => navigation.navigate("FirstPage")}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate("ThirdPage")}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        >
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
