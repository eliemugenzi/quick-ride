import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: DIMENSIONS.deviceHeight,
    width: DIMENSIONS.deviceWidth,
  },
  wrapper: {
    marginHorizontal: DIMENSIONS.deviceWidth * 0.01,
    marginVertical: DIMENSIONS.deviceHeight * 0.1,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 13,
    fontFamily: "Poppins-Bold",
  },
  description: {
    color: COLORS.darkGray,
    fontSize: 10,
    marginVertical: DIMENSIONS.margin / 2,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    marginHorizontal: DIMENSIONS.deviceWidth * 0.15,
  },
  onboardingAction: {
    position: "absolute",
    bottom: "10%",
    left: "45%",
    width: 50,
    height: 50,
  },
  skip: {
    position: "absolute",
    top: "10%",
    right: "5%",
  },
  skipText: {
    fontFamily: "Poppins-Regular",
  },
  actionIcon: {
    width: 50,
    height: 50,
  },
});

export default styles;
