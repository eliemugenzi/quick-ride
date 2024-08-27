
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Base, { Props } from './Base';

import style from './Base/styles';
import Icon from '../Icon';

const Password: React.FC<Props> = (props) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  return (
    <Base
      {...props}
      inputProps={{
        secureTextEntry,
        maxLength: 6,
      }}
      suffix={
        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Icon
            name={secureTextEntry ? 'eye' : 'eye-off'}
            color={style.placeholder.color}
            size={15}
          />
        </TouchableOpacity>
      }
    />
  );
};

export default Password;
