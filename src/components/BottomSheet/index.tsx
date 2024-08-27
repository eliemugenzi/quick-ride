import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, StyleProp, ViewStyle, View } from "react-native";
import Sheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Icon from "../Icon";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onClose?: () => void;
}

const BottomSheet: React.FC<Props> = ({ children, style, onClose }) => {
  const bottomSheetRef = useRef<Sheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const snapPoints = useMemo(() => ["25%", "50%", "95%"], []);

  return (
    <Sheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      style={{ marginHorizontal: 10 }}
    >
      <BottomSheetView 
      // style={styles.contentContainer}
      >
        <View style={[styles.container, style]}>{children}</View>
      </BottomSheetView>
    </Sheet>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "transparent",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomSheet;
