import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import { router } from "expo-router";
import React from "react";

import styles from "./styles";
import Button from "@/components/Button";

const SignIn = () => {
  return (
    <ScreenWrapper hasBack onBackPress={() => router.back()}>
      <Typography.Title>
        Signin with your email or phone number
      </Typography.Title>
      <TextInput style={styles.input} placeholder="Email or Phone Number" />
      <TextInput.Password
        style={styles.input}
        placeholder="Enter Your Password"
      />
      <Typography.Text style={styles.textDanger}>
        Forgot Password?
      </Typography.Text>
      <Button
        type="primary"
        style={styles.input}
        onPress={() => {
          router.navigate("/(tabs)");
        }}
      >
        Sign In
      </Button>
    </ScreenWrapper>
  );
};

export default SignIn;
