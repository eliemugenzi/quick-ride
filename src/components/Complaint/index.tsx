import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Card from "../Card";
import Typography from "../Typography";
import Icon from "../Icon";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import COLORS from "@/theme/colors";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";

interface Props {
  type: string;
  description: string;
  createdAt: string;
  style?: StyleProp<ViewStyle>;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Complaint: React.FC<Props> = ({
  type,
  description,
  createdAt,
  style,
  onEdit,
  onDelete,
}) => {
  return (
    <Card style={[styles.wrapper, style]} noShadow>
      <View>
        <Typography.Title level={3} style={styles.title}>
          {type}
        </Typography.Title>
        <Typography.Text style={styles.description}>
          {description}
        </Typography.Text>
      </View>
      <View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButtonWrapper} onPress={onEdit}>
            <AntDesign name="edit" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <AntDesign name="delete" color={COLORS.red} size={20} />
          </TouchableOpacity>
        </View>
        <Typography.Text style={styles.dateCreated}>{dayjs(createdAt).format("HH:MM")}</Typography.Text>
      </View>
    </Card>
  );
};

export default Complaint;
