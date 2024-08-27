import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "../Icon";
import Typography from "../Typography";

interface Props {
  children: React.ReactNode;
  hasBack?: boolean;
  onBackPress?: () => void;
  headerTitle?: string;
}

const ScreenWrapper: React.FC<Props> = ({
  children,
  hasBack,
  onBackPress,
  headerTitle,
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 60,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {hasBack && (
          <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
            <Icon name="chevron-left" size={25} />
            <Typography.Text style={styles.backBtnText}>Back</Typography.Text>
          </TouchableOpacity>
        )}
        {headerTitle && (
          <Typography.Title
            level={4}
            style={{
              marginLeft: 40,
              fontFamily: "Poppins-Bold",
            }}
          >
            {headerTitle}
          </Typography.Title>
        )}
      </View>

      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

export default ScreenWrapper;
