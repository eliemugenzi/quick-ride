import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import Icon, { IconNames } from "@/components/Icon";
import { Link, router } from "expo-router";

import onboardingAction1 from "@/assets/images/onboarding-action-1.png";
import onboardingAction2 from "@/assets/images/onboarding-action-2.png";
import onboardingAction3 from "@/assets/images/onboarding-action-three.png";

type OnboardingData = {
  title: string;
  description: string;
  image: IconNames;
  actionIcon: any;
};

const OnBoarding = () => {
  const [state, setState] = useState({
    step: 0,
  });

  const data: OnboardingData[] = [
    {
      title: "Anywhere you are",
      description:
        "Sell houses easily with the help of Listenoryx and to make this line big I am writing more.",
      image: "onboarding-one",
      actionIcon: onboardingAction1,
    },
    {
      title: "At anytime",
      description:
        "Sell houses easily with the help of Listenoryx and to make this line big I am writing more.",
      image: "onboarding-two",
      actionIcon: onboardingAction2,
    },
    {
      title: "Book your car",
      description:
        "Sell houses easily with the help of Listenoryx and to make this line big I am writing more.",
      image: "onboarding-three",
      actionIcon: onboardingAction3,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {[0, 1].includes(state.step) && (
        <Link href="/auth" style={styles.skip}>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/auth");
            }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </Link>
      )}
      <View style={styles.wrapper}>
        <Icon
          name={data[state.step].image}
          width={450}
          height={150}
          style={{
            width: "100%",
          }}
        />
        <Text style={styles.title}>{data[state.step].title}</Text>
        <Text style={styles.description}>{data[state.step].description}</Text>
      </View>
      <TouchableOpacity
        style={styles.onboardingAction}
        onPress={() => {
          if (state?.step < 2) {
            setState({
              ...state,
              step: state.step + 1,
            });
          } else if (state?.step === 2) {
            router.navigate("/auth");
          }
        }}
      >
        <Image source={data[state.step].actionIcon} style={styles.actionIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoarding;
