

import React from 'react';
import { Props } from './Base';
import Number from './Number';
import styles from './Base/styles';
import Typography from '../Typography';

const Amount: React.FC<Props> = (props) => {
  return (
    <Number
      {...props}
      prefix={
        <Typography style={styles.numberPrefix}>
          RWF
        </Typography>
      }
    />
  );
};

export default Amount;
