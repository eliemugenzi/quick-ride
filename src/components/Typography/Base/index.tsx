
import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

import styles, { BaseType } from './styles';

type EllipsisType =
  | undefined
  | boolean
  | { rows: number; mode?: 'head' | 'middle' | 'tail' | 'clip' };

export interface Props {
  children:
    | string
    | string[]
    | React.ReactText
    | React.ReactText[]
    | React.ReactElement
    | React.ReactNode;
  ellipsis?: EllipsisType;
  strong?: boolean;
  underline?: boolean;
  mark?: boolean;
  code?: boolean;
  type?: BaseType;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  testID?: string;
}

const ellipsisConfig = (ellipsis: EllipsisType) => {
  const ellipsisProps: { [key: string]: any } = {};

  if (ellipsis) {
    ellipsisProps.ellipsis = true;
    ellipsisProps.numberOfLines = 1;
    if (typeof ellipsis === 'object') {
      ellipsisProps.numberOfLines = ellipsis.rows;
      if (ellipsis.mode) ellipsisProps.ellipsizeMode = ellipsis.mode;
    }
  }

  return ellipsisProps;
};

const Base: React.FC<Props> = ({
  children,
  ellipsis,
  type = 'plain',
  strong,
  style,
  numberOfLines,
  testID,
}) => {
  return (
    <Text
      {...ellipsisConfig(ellipsis)}
      style={[
        styles(type).text,
        strong
          ? styles(type).boldedText
          : styles(type).regularText,
        style,
      ]}
      numberOfLines={numberOfLines}
      testID={testID}>
      {children}
    </Text>
  );
};

export default Base;
