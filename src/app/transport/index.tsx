import Grid from "@/components/Grid";
import Row from "@/components/Row";
import ScreenWrapper from "@/components/ScreenWrapper";
import TransportOption, {
  Props as TransportOptionProps,
} from "@/components/TransportOption";
import Typography from "@/components/Typography";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const Transport = () => {
  const transportOptions: TransportOptionProps[] = [
    {
      type: "car",
      label: "Car",
    },
    {
      type: "bike",
      label: "Bike",
    },
    {
      type: "cycle",
      label: "Cycle",
    },
    {
      type: "taxi",
      label: "Taxi",
    },
  ];

  return (
    <ScreenWrapper
      headerTitle="Select transport"
      hasBack
      onBackPress={() => {
        router.back();
      }}
    >
      <Typography.Title style={{ textAlign: "center" }} level={3}>
        Select your transport
      </Typography.Title>
      <Row style={{ marginVertical: 10 }}>
        {transportOptions
          ?.slice(0, 2)
          ?.map((transportOption) => (
            <TransportOption
              {...transportOption}
              key={transportOption.type}
              onPress={() => router.navigate("/available-cars")}
            />
          ))}
      </Row>
      <Row>
        {transportOptions
          ?.slice(2, 4)
          ?.map((transportOption) => (
            <TransportOption
              {...transportOption}
              key={transportOption.type}
              onPress={() => router.navigate("/available-cars")}
            />
          ))}
      </Row>
    </ScreenWrapper>
  );
};

export default Transport;
