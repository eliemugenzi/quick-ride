import React from "react";
import { useAtom } from "jotai";
import { isEmpty } from "lodash";
import authenticationAtom from "@/atoms/userAtom";
import { Redirect, useRootNavigationState } from "expo-router";

const Index = () => {
  const [{ data, _j }] = useAtom(authenticationAtom) as any;
  const navigationState = useRootNavigationState();
  if (!navigationState?.key) return null;

  const userData = data || _j

  const isUserLoggedIn = (!isEmpty(userData) ) && userData?.isLoggedIn;

  console.log({ userData })

  return <Redirect href={isUserLoggedIn ? "/(drawer)/(tabs)" : "/onboarding"} />;
};

export default Index;
