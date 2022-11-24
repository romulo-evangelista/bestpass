import React from 'react';
import {TextInput} from 'react-native';

import {styles} from './styles';

export const PasswordInput = ({password, setPassword, visibility}: any) => {
  const onChangeText = (text: string) => {
    setPassword(text);
  };

  return (
    <TextInput
      value={password}
      maxLength={18}
      onChangeText={onChangeText}
      secureTextEntry={visibility}
      style={styles.password}
    />
  );
};
