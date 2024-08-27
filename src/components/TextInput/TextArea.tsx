import React from 'react';
import Base, { Props } from './Base';
import styles from './Base/styles';

const TextArea: React.FC<Props> = (props) => {
  return (
    <Base
      {...props}
      inputStyle={[styles.textAreaInput, props.inputStyle]}
      inputWrapperStyle={[
        styles.textAreaInputWrapper,
        props.inputWrapperStyle,
      ]}
      inputProps={Object.assign(
        { multiline: true },
        props.inputProps || {},
      )}
    />
  );
};

export default TextArea;