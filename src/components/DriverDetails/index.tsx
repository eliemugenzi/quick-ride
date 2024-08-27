import React from "react";
import Card from "../Card";
import { View, Image, StyleProp, ViewStyle } from "react-native";
import driverProfile from "@/assets/images/driver-profile.png";
import Typography from "../Typography";
import Icon from "../Icon";

import styles from "./styles";

export interface Props {
  image: any;
  name: string;
  carImage: any;
  ratings: string;
  distance: string;
  style?: StyleProp<ViewStyle>;
}

const DriverDetails: React.FC<Props> = ({
  image,
  name,
  carImage,
  ratings,
  distance,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.flex, { justifyContent: "space-between" }]}>
        <Image style={styles.image} source={image} />
        <View style={{ marginLeft: 10 }}>
          <Typography.Title level={2} style={styles.title}>
            {name}
          </Typography.Title>
          <View style={styles.flex}>
            <Icon name="map-pin" size={15} style={styles.icon} />
            <Typography.Text style={styles.text}>{distance}</Typography.Text>
          </View>
          <View style={styles.flex}>
            <Icon name="star" size={15} style={styles.icon} color="#FBC02D" />
            <Typography.Text style={styles.text}>{ratings}</Typography.Text>
          </View>
        </View>
      </View>
      <Image source={carImage} style={styles.carImage} />
    </View>
  );
};

export default DriverDetails;
