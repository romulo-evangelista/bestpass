import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export const PasswordButton = ({}: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.password}>Enviar senha para o embate</Text>
      <Image source={require('../../../../assets/images/icons/punch.png')} />
    </TouchableOpacity>
  );
};
