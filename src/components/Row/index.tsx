import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import styles from "./styles";
import DIMENSIONS from "@/theme/dimensions";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  gutter?: number;
  equal?: boolean;
  style?: StyleProp<ViewStyle>;
  columnsStyles?: StyleProp<ViewStyle>[];
  wrap?: boolean;
}

const Row: React.FC<Props> = ({
  children,
  gutter = DIMENSIONS.padding,
  equal = true,
  style,
  columnsStyles,
  wrap = false,
}) => {
  const theChildren = Array.isArray(children) ? children : [children];
  return (
    <View style={[styles.row, style, wrap && styles.wrap]}>
      {theChildren.map((child, index) => (
        <React.Fragment key={index}>
          <View
            style={[equal && styles.col, columnsStyles && columnsStyles[index]]}
          >
            {child}
          </View>
          {index + 1 < theChildren.length && <View style={{ width: gutter }} />}
        </React.Fragment>
      ))}
    </View>
  );
};

export default Row;
