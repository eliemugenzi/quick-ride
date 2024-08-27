

import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Base, { Props } from './Base';

import styles from './Base/styles';

interface ParagraphProps extends Props {
  paragraphStyle?: StyleProp<ViewStyle>;
}

const Paragraph: React.FC<ParagraphProps> = ({
  style,
  paragraphStyle,
  type = 'plain',
  ...props
}) => {
  return (
    <View style={[styles(type).paragraph, paragraphStyle]}>
      <Base {...props} style={[style]} />
    </View>
  );
};

export default Paragraph;
