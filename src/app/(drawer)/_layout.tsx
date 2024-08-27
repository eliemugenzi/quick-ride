import React from "react";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AntDesign, FontAwesome6, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import avatarImage from "@/assets/images/avatar.png";
import Typography from "@/components/Typography";
import Line from "@/components/Line";
import { useAtom } from "jotai";
import { logOutAtom } from "@/atoms/userAtom";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const [, logOut] = useAtom(logOutAtom);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.contentContainer}
      style={{
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.drawerHeader}>
          <TouchableOpacity
            style={styles.backIconWrapper}
            onPress={() => router.back()}
          >
            <AntDesign name="left" size={20} style={styles.backIcon} />
            <Typography.Text>Back</Typography.Text>
          </TouchableOpacity>
          <Image
            source={avatarImage}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Typography.Title level={3} style={styles.username}>
            Nate Samson
          </Typography.Title>
          <Typography.Text style={styles.email}>nate@gmail.com</Typography.Text>
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <DrawerItem
            label="History"
            onPress={() => router.navigate("/(drawer)/history")}
            icon={(props) => <AntDesign name="book" size={15} />}
            labelStyle={styles.drawerItemLabel}
          />
          <Line />
          <DrawerItem
            label="Complain"
            onPress={() => router.navigate("/(drawer)/complain")}
            icon={(props) => <AntDesign name="message1" size={15} />}
            labelStyle={styles.drawerItemLabel}
          />
          <Line />
          <DrawerItem
            label="Referral"
            onPress={() => router.navigate("/(drawer)/complain")}
            icon={(props) => <FontAwesome6 name="people-group" size={15} />}
            labelStyle={styles.drawerItemLabel}
          />
          <Line />
          <DrawerItem
            label="About Us"
            onPress={() => router.navigate("/(drawer)/complain")}
            icon={(props) => <Ionicons name="information-circle-outline" size={15} />}
            labelStyle={styles.drawerItemLabel}
          />
          <Line />
          <DrawerItem
            label="Settings"
            onPress={() => router.navigate("/(drawer)/complain")}
            icon={(props) => <Ionicons name="settings" size={15} />}
            labelStyle={styles.drawerItemLabel}
          />
          <Line />
          <DrawerItem
            label="Help and support"
            onPress={() => router.navigate("/(drawer)/complain")}
            icon={(props) => <Ionicons name="help-circle-outline" size={15} />}
            labelStyle={styles.drawerItemLabel}
          />
          <Line />
          <DrawerItem
            label="Logout"
            onPress={() => {
                logOut({
                    callback: router.navigate('/auth/signin')
                })
            }}
            icon={(props) => <SimpleLineIcons name="logout" size={15} />}
            labelStyle={styles.drawerItemLabel}
            
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="history" />
      <Drawer.Screen name="complain" />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
    overflow: "hidden",
  },
  wrapper: {
    flex: 1,
    borderTopEndRadius: 45, // Apply border radius
    borderBottomEndRadius: 45, // Apply border radius

    overflow: "hidden", // Ensures content respects border radius
    marginVertical: 20, // Space at the top and bottom
    marginHorizontal: 10, // Space on the sides
    backgroundColor: "#fff",
  },
  drawerHeader: {
    padding: 20,
  },
  username: {
    marginTop: 15,
    fontSize: 14,
  },
  email: {
    fontSize: 12,
  },

  backIconWrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
  },
  backIcon: {
    alignSelf: "center",
    marginRight: 10,
  },
  drawerItemLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});

export default DrawerLayout;
