import COLORS from "@/theme/colors";
import { StyleSheet } from "react-native";

const sytles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: "100%",
  },
  flex: {
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
  },
  text: {
    fontSize: 12,
    color: COLORS.darkGray,
  },
  icon: {
    marginRight: 5,
  },
  carImage: {
    width: 100,
    height: 50,
  },
});

export default sytles;
