import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import styles from "./styles";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Line: React.FC<Props> = ({ style }) => {
  return <View style={[styles.line, style]} />;
};

export default Line;
