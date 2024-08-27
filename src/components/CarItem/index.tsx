import React from "react";
import Card from "../Card";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import Typography from "../Typography";
import Icon from "../Icon";

import styles from "./styles";
import Row from "../Row";
import Button from "../Button";

interface Props {
  name: string;
  location: string;
  gearType: string;
  seatsCount: number;
  fuelType: string;
  image: any;
  style?: StyleProp<ViewStyle>;
  onBookRide?: () => void;
}

const CarItem: React.FC<Props> = ({
  name,
  location,
  gearType,
  seatsCount,
  fuelType,
  image,
  style,
  onBookRide,
}) => {
  return (
    <Card style={[styles.container, style]}>
      <View style={styles.carDetailsWrapper}>
        <View>
          <Typography.Title level={3}>{name}</Typography.Title>
          <Typography.Text style={styles.carDetailsSubtitle}>
            {gearType} | {seatsCount} seats | {fuelType}
          </Typography.Text>
          <View style={styles.locationWrapper}>
            <Icon name="map-pin" size={15} />
            <Typography.Text style={styles.locationText}>
              {location}
            </Typography.Text>
          </View>
        </View>
        <Image source={image} />
      </View>
      <Row style={{ marginVertical: 10 }}>
        <Button>Book later</Button>
        <Button type="primary" onPress={onBookRide}>
          Ride Now
        </Button>
      </Row>
    </Card>
  );
};

export default CarItem;
