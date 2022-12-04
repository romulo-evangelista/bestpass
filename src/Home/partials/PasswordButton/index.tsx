import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export const PasswordButton = ({
  navigation,
  password,
  haveLowerCase,
  haveUpperCase,
  haveNumbers,
  haveSymbols,
}: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Battle', {
          password,
          haveLowerCase,
          haveUpperCase,
          haveNumbers,
          haveSymbols,
        });
      }}>
      <Text style={styles.password}>Enviar senha para o embate</Text>
      <Image source={require('../../../../assets/images/punch.png')} />
    </TouchableOpacity>
  );
};
