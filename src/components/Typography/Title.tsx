/*
 * Component: Title
 * Created At: 2020-10-13 13:09:50
 */

import React from 'react';
import Base, { Props } from './Base';

import styles from './Base/styles';

interface TitleProps extends Props {
  level?: 1 | 2 | 3 | 4;
}

const Title: React.FC<TitleProps> = ({
  style,
  level = 1,
  type = 'plain',
  ...props
}) => {
  return (
    <Base
      {...props}
      style={[styles(type, level).title, style]}
    />
  );
};

export default Title;
