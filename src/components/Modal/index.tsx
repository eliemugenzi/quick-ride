import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import RNModal from "react-native-modal";
import color from "color";
import ModalHeader, { ModalHeaderProps } from "./ModalHeader";
import styles from "./styles";
import Card from "../Card";
import ModalActions, { ModalActionsProps } from "./ModalActions";
import DIMENSIONS from "@/theme/dimensions";
/**
 *
 * for more props of this component
 * check out react native community modal library
 *  https://github.com/react-native-community/react-native-modal
 *
 */

export interface ModalProps extends ModalHeaderProps, ModalActionsProps {
  onClose?: () => void;
  dismissible?: boolean;
  visible: boolean;
  toggleVisibility?: (visible: boolean) => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
  avoidKeyboard?: boolean; // If true, it will move the modal up if the keyboard is open
  noShadow?: boolean;
  transparent?: boolean;
}
const ANIMATION_TIMING = 500;

const Modal: React.FC<ModalProps> = ({
  visible,
  toggleVisibility,
  children,
  style,
  contentStyle,
  avoidKeyboard = false,
  title,
  cardStyle,
  noShadow,
  transparent,
  closeIconPosition: iconPosition,
  ...rest
}) => {
  const { closable, actions = [], onClose } = rest;
  const closeModal = () => {
    if (onClose) onClose();
    if (toggleVisibility) toggleVisibility(false);
  };

  return (
    <RNModal
      isVisible={visible}
      backdropColor={color("#000").alpha(1).rgb().string()}
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      style={style}
      avoidKeyboard={avoidKeyboard}
      animationInTiming={ANIMATION_TIMING}
      animationOutTiming={ANIMATION_TIMING}
      backdropTransitionInTiming={ANIMATION_TIMING}
      backdropTransitionOutTiming={ANIMATION_TIMING}
      deviceHeight={DIMENSIONS.deviceHeight}
      deviceWidth={DIMENSIONS.deviceWidth}
      {...rest}
    >
      <Card noShadow={noShadow || transparent} style={[cardStyle, style]}>
        {title || closable ? (
          <ModalHeader
            title={title}
            closable={closable}
            onClose={closeModal}
            closeIconPosition={iconPosition}
          />
        ) : null}
        <View style={[styles.content, contentStyle]}>{children}</View>
        {actions.length > 0 ? (
          <ModalActions
            actions={actions}
            actionsContainerStyles={rest.actionsContainerStyles}
          />
        ) : null}
      </Card>
    </RNModal>
  );
};

export default Modal;
