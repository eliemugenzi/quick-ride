import { Dimensions, Platform } from "react-native";
import COLORS from "./colors";
import { scale } from "@/utils";

const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get("window");

const shadow = {
  shadowColor: COLORS.black,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 20,
};

const padding = 24;

const appHeaderHeight = scale(188);

const DIMENSIONS = {
  shadow,
  deviceHeight: DEVICE_HEIGHT,
  deviceWidth: DEVICE_WIDTH,
  illustrationWidth: scale(358),
  illustrationHeight: scale(300),
  padding,
  quickMenuHeight: 80,
  tabHeight: 64,
  margin: 15,
  smPadding: 5,
  bold: Platform.select({ ios: "800", android: "bold" }),
  appHeaderHeight,
  statCardHeaderHeight: 116,
  modalHeight: DEVICE_HEIGHT - appHeaderHeight,
  hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
};

export default DIMENSIONS;
