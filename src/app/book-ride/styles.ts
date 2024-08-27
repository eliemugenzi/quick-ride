import COLORS from "@/theme/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  slideWrapper: {
    flexDirection: "row",
  },
  slideArrow: {
    // marginHorizontal: 10,
    // flexBasis: "20%",
  },
  slideImage: {
    // flexBasis: "40%",
  },
  reviewWrapper: {
    flexDirection: "row",
  },
  starIcon: {
    marginRight: 10,
  },
  reviewText: {
    color: COLORS.darkGray,
    fontSize: 12,
  },
  title: {
    fontSize: 12,
    marginVertical: 10,
  },
});

export default styles;
