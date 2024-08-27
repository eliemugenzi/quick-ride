import React from "react";
import Card from "../Card";
import { IconsNames } from "../Icon/icons";
import Icon from "../Icon";
import Typography from "../Typography";

import styles from "./styles";
import { StyleProp, ViewStyle } from "react-native";

export interface Props {
  type: Partial<IconsNames>;
  name: string;
  detail: string;
  style?: StyleProp<ViewStyle>;
}

const CarSpecification: React.FC<Props> = ({ type, name, detail, style }) => {
  return (
    <Card style={[styles.wrapper, style]}>
      <Icon name={type} size={20} />
      <Typography.Title style={styles.title}>{name}</Typography.Title>
      <Typography.Text style={styles.subtitle}>{detail}</Typography.Text>
    </Card>
  );
};

export default CarSpecification;
