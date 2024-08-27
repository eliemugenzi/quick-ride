import COLORS from "@/theme/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  carDetailsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationWrapper: {
    flexDirection: "row",
  },
  locationText: {
    marginLeft: 10,
    fontSize: 11,
  },
  carDetailsSubtitle: {
    color: COLORS.darkGray,
    fontSize: 12,
    marginBottom: 10,
  },
});

export default styles;
