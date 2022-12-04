import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export const Credits = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../../../assets/images/info.png')} />
      <Text style={styles.text}> Créditos do infográfico</Text>
    </TouchableOpacity>
  );
};
