import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { router } from "expo-router";

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Icon name="auth-welcome" width={450} height={150} />
        <Typography.Title style={styles.title}>Welcome</Typography.Title>
        <Typography.Text style={styles.description}>
          Have a better sharing experience
        </Typography.Text>
        <View style={styles.buttonsWrapper}>
          <Button
            type="primary"
            size="small"
            style={styles.registerBtn}
            onPress={() => {
              router.navigate("/auth/signup");
            }}
          >
            Create an account
          </Button>
          <Button
            type="plain"
            size="small"
            onPress={() => router.navigate("/auth/signin")}
          >
            Login
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
