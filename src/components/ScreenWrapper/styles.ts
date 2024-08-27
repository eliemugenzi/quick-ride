import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.deviceWidth,
    height: DIMENSIONS.deviceHeight,
    backgroundColor: COLORS.white,
    paddingTop: DIMENSIONS.padding * 2.5,
    paddingBottom: DIMENSIONS.padding * 3,
  },
  backBtn: {
    flexDirection: "row",
  },
  backBtnText: {
    marginLeft: DIMENSIONS.margin,
    fontFamily: "Poppins-Regular",
    alignSelf: "center",
    fontSize: 15,
  },
  wrapper: {
    padding: DIMENSIONS.padding,
  },
});

export default styles;
