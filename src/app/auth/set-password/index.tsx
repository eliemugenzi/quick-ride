import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import React from "react";

import styles from "./styles";
import Button from "@/components/Button";
import { router } from "expo-router";

const SetPassword = () => {
  return (
    <ScreenWrapper
      hasBack
      onBackPress={() => {
        router.back();
      }}
    >
      <Typography.Title style={styles.center}>
        Set New password
      </Typography.Title>
      <Typography.Text style={[styles.center]}>
        Set your new password
      </Typography.Text>
      <TextInput.Password
        placeholder="Enter Your New Password"
        style={styles.input}
      />
      <TextInput.Password placeholder="Confirm Password" style={styles.input} />
      <Typography.Text style={styles.text}>
        At least 1 number or a special character
      </Typography.Text>
      <Button
        type="primary"
        style={[styles.input, { marginTop: 20 }]}
        onPress={() => router.navigate("/auth/signin")}
      >
        Save
      </Button>
    </ScreenWrapper>
  );
};

export default SetPassword;
