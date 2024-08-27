import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Typography from "../Typography";
import Card from "../Card";

import styles from "./styles";

export interface Props {
  name: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}

const CarFeature: React.FC<Props> = ({ name, value, style }) => {
  return (
    <Card style={[styles.wrapper, style]}>
      <Typography.Text style={styles.text}>{name}</Typography.Text>
      <Typography.Text style={styles.text}>{value}</Typography.Text>
    </Card>
  );
};

export default CarFeature;
