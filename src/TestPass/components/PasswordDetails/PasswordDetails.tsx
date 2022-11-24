import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';

export const PasswordDetails = ({password}: any) => {
  return (
    <>
      <Text style={styles.text}>
        No momento a senha tem {password.length} caracteres e possui:
      </Text>
      <Text style={styles.text}>
        Minúscula | Maiúscula | Números | Símbolos
      </Text>
    </>
  );
};
