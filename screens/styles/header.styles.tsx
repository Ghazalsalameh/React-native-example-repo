import { StyleSheet } from "react-native";
import { white } from "../../common/CommonColors";

export const headerStyles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#1B2346",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  container: {
    marginTop: -60,
  },

  cardContainer: {
    borderRadius: 40,
    backgroundColor: "white",
    width: "45%",
    justifyContent: "space-between",
    alignItems: "center",
    height: 210,
    margin: 10,
    textAlign: "center",
    flexWrap: "wrap",
    borderColor: "#F0FFFF",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    borderStyle: "solid",
    shadowRadius: 3,
    borderWidth: 1,
  },
  item: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,
    margin: 4,
    flex: 1,
  },
  listTitle: {
    color: "white",
    backgroundColor: "pink",
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1B2346",
  },
  description: {
    textAlign: "center",
    color: "#5B7798",
  },
  buttonDetails: {
    color: white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  pressable: {
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: 45,
    display: "flex",
    justifyContent: "center",
    marginBottom: -2,
  },
});
