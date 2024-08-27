import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationDetailsWrapper: {
    flexDirection: "row",
  },
  locationDetails: {
    marginLeft: DIMENSIONS.margin,
  },
  locationTitle: {
    fontSize: 12,
    fontWeight: "700",
  },
  locationDescription: {
    fontSize: 10,
    color: COLORS.darkGray,
  },
  locationDistance: {
    fontSize: 11,
  },
});

export default styles;
