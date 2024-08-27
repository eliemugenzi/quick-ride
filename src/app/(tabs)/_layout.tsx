import Icon from "@/components/Icon";
import COLORS from "@/theme/colors";
import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hexagon: {
    width: 100,
    height: 55,
    marginVertical: 30,
    position: "absolute",
    bottom: "25%",
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  hexagonBefore: {
    position: "absolute",
    top: -27.5,
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderBottomWidth: 27.5,
    borderBottomColor: COLORS.primary,
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -27.5,
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderTopWidth: 27.5,
    borderTopColor: COLORS.primary,
  },
  hexagonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Poppins-Regular",
        },
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: "white",
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite/index"
        options={{
          title: "Favourite",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet/index"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => (
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner}>
                <Icon name="wallet" color={color} size={40} />
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="offer/index"
        options={{
          title: "Offer",
          tabBarIcon: ({ color }) => (
            <Icon name="discount" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
