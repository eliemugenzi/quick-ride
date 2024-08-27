import COLORS from "@/theme/colors";
import DIMENSIONS from "@/theme/dimensions";
import { StyleSheet } from "react-native";

const constants = {
  IconPosition: 15,
};

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  content: {
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    alignSelf: "center",
    width: "100%",
    fontSize: 14,
    marginBottom: DIMENSIONS.padding,
    color: COLORS.primary,
  },
  icon: {
    alignSelf: "center",
    marginLeft: "auto",
    marginTop: -20,
  },
  IconRelative: {
    position: "absolute",
    right: constants.IconPosition,
    top: constants.IconPosition,
  },
});

export const actionsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttton: {
    width: DIMENSIONS.deviceWidth * 0.35,
  },
});
