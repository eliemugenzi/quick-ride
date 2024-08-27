import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import { router } from "expo-router";
import React from "react";

import CarImage from "@/assets/images/car-image.png";
import CarItem from "@/components/CarItem";

import styles from "./styles";

const AvailableCars = () => {
  const carList = [
    {
      location: "800m (5 mins away)",
      image: CarImage,
      name: "BMW Cabrio",
      gearType: "Automatic",
      seatsCount: 5,
      fuelType: "Diesel",
    },
    {
      location: "800m (5 mins away)",
      image: CarImage,
      name: "BMW Cabrio",
      gearType: "Automatic",
      seatsCount: 5,
      fuelType: "Diesel",
    },
    {
      location: "800m (5 mins away)",
      image: CarImage,
      name: "BMW Cabrio",
      gearType: "Automatic",
      seatsCount: 5,
      fuelType: "Diesel",
    },
  ];
  return (
    <ScreenWrapper hasBack onBackPress={() => router.back()}>
      <Typography.Title level={3}>Available cars for ride</Typography.Title>
      <Typography.Text style={styles.subtitle}>18 cars found</Typography.Text>
      {carList?.map((car, i) => (
        <CarItem
          {...car}
          key={i}
          style={{ marginBottom: 10 }}
          onBookRide={() => router.navigate("/book-ride")}
        />
      ))}
    </ScreenWrapper>
  );
};

export default AvailableCars;
