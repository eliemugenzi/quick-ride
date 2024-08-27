import React from "react";
import { Image, View } from "react-native";
import Typography from "../Typography";
import Icon from "../Icon";
import Card from "../Card";

import styles from "./styles";

export interface Props {
  name: string;
  review: string;
  image: any;
}

const CarDetail: React.FC<Props> = ({ name, review, image }) => {
  return (
    <Card style={styles.wrapper}>
      <View>
        <Typography.Title style={styles.title}>{name}</Typography.Title>
        <View style={styles.ratingsRow}>
          <Icon name="star" color="#FBC02D" size={20} />
          <Typography.Text style={styles.subtitle}>{review}</Typography.Text>
        </View>
      </View>
      <Image source={image} style={styles.carImage} />
    </Card>
  );
};

export default CarDetail;
