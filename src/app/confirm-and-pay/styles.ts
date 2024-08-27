import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  margin: {
    marginVertical: DIMENSIONS.margin,
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
  },
});

export default styles;
