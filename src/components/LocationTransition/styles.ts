import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconsWrapper: {
    flexDirection: "column",
  },
  wrapper: {
    flexDirection: "row",
    margin: 0,
  },
  locationItem: {
    marginBottom: DIMENSIONS.margin,
  },
  locationTitle: {
    fontSize: 12,
  },
  locationLast: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationDetailText: {
    fontSize: 10,
    color: COLORS.darkGray,
  },
  locationDistance: {
    fontSize: 10,
  },
});

export default styles;
