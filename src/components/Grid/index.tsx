import React from "react";
import { View } from "react-native";

import styles from "./styles";
import DIMENSIONS from "@/theme/dimensions";

interface Props {
  children: React.ReactNode;
  columns: number;
}

const Grid: React.FC<Props> = ({ children, columns }) => {
  const itemWidth = (DIMENSIONS.deviceWidth - 10 * (columns - 1)) / columns;
  return (
    <View style={styles.grid}>
      <View
        style={{
          width: itemWidth,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Grid;
