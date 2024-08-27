import React from "react";
import carDetail from "@/assets/images/car-detail.png";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Image, View } from "react-native";
import Typography from "@/components/Typography";
import Icon from "@/components/Icon";

import styles from "./styles";
import Row from "@/components/Row";
import CarSpecification from "@/components/CarSpecification";
import CarFeature from "@/components/CarFeature";
import Button from "@/components/Button";
import { router } from "expo-router";

const BookRide = () => {
  const carDetails: any = {
    name: "Mustang Shelby GT",
    reviews: "4.9(531 reviews)",
    image: carDetail,
    specifications: [
      {
        name: "Max. power",
        type: "power",
        detail: "2500hp",
      },
      {
        name: "Fuel",
        type: "fuel",
        detail: "10km per litre",
      },
      {
        name: "Max. speed",
        type: "car-speed",
        detail: "2500ph",
      },
      {
        name: "0-60 mph",
        type: "mph",
        detail: "2.5sec",
      },
    ],
    features: [
      {
        name: "Model",
        value: "GT5000",
      },
      {
        name: "Capacity",
        value: "760hp",
      },
      {
        name: "Color",
        value: "Red",
      },
      {
        name: "Fuel type",
        value: "Octane",
      },
      {
        name: "Gear type",
        value: "Automatic",
      },
    ],
  };

  return (
    <ScreenWrapper hasBack onBackPress={() => router.back()}>
      <View>
        <Typography.Title>{carDetails.name}</Typography.Title>
        <View style={styles.reviewWrapper}>
          <Icon name="star" color="#FBC02D" size={20} style={styles.starIcon} />
          <Typography.Text style={styles.reviewText}>
            {carDetails.reviews}
          </Typography.Text>
        </View>
        <View style={styles.slideWrapper}>
          <Icon
            name="chevron-left"
            style={[styles.slideImage, { marginRight: 10 }]}
            size={30}
          />
          <Image source={carDetails.image} style={[styles.slideImage]} />
          <Icon
            name="chevron-right"
            style={[styles.slideImage, { marginLeft: 10 }]}
            size={30}
          />
        </View>
        <Typography.Title style={styles.title}>Specifications</Typography.Title>
        <Row gutter={10}>
          {carDetails.specifications?.map(
            (specification: any, index: number) => (
              <CarSpecification
                {...specification}
                key={index}
                // style={{ width: 150, height: 200 }}
              />
            ),
          )}
        </Row>
        <Typography.Title style={styles.title}>Specifications</Typography.Title>
        {carDetails?.features?.map((feature: any, index: number) => (
          <CarFeature {...feature} key={index} style={{ marginBottom: 10 }} />
        ))}
      </View>
      <Row>
        <Button>Book later</Button>
        <Button type="primary" onPress={() => router.navigate("/confirm-ride")}>
          Ride now
        </Button>
      </Row>
    </ScreenWrapper>
  );
};

export default BookRide;
