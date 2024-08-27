import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
  },
});

export default styles;
