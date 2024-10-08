import React from 'react';
import Base, { Props } from './Base';

interface TextProps extends Props {}

const Text: React.FC<TextProps> = ({ ...props }) => {
  return <Base {...props} />;
};

export default Text;