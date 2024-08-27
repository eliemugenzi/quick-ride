import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#E2F5ED",
    borderColor: COLORS.primary,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: DIMENSIONS.padding / 2,
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.darkGray,
    marginLeft: 10,
  },
  ratingsRow: {
    flexDirection: "row",
  },
  carImage: {
    alignSelf: "center",
    width: 50,
    height: 30,
  },
});

export default styles;
