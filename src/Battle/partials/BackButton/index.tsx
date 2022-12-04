import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export const BackButton = ({navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.goBack();
      }}>
      <Text style={styles.password}>Escrever senha para o próximo round</Text>
      <Image source={require('../../../../assets/images/return.png')} />
    </TouchableOpacity>
  );
};
