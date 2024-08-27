import React from "react";
import { View } from "react-native";

import styles from "./styles";

interface Props {
  children: React.ReactNode;
}

const GridItem: React.FC<Props> = ({ children }) => {
  return <View style={styles.gridItem}>{children}</View>;
};

export default GridItem;
