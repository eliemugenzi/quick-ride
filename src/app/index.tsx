import React from "react";
import { useAtom } from "jotai";
import { isEmpty } from "lodash";
import authenticationAtom from "@/atoms/userAtom";
import { Redirect, useRootNavigationState } from "expo-router";

const Index = () => {
  const [{ data }] = useAtom(authenticationAtom) as any;
  const navigationState = useRootNavigationState();
  if (!navigationState?.key) return null;

  return <Redirect href={!isEmpty(data) ? "/(tabs)" : "/onboarding"} />;
};

export default Index;
