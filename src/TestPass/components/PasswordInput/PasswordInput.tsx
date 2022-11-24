import React from 'react';
import {TextInput} from 'react-native';

import {styles} from './styles';

export const PasswordInput = ({
  password,
  setPassword,
  visibility,
  setHaveLowerCase,
  setHaveUpperCase,
  setHaveNumbers,
  setHaveSymbols,
}: any) => {
  const onChangeText = (text: string) => {
    setPassword(text);

    setHaveLowerCase(RegExp('[a-z]', 'g').test(text));
    setHaveUpperCase(RegExp('[A-Z]', 'g').test(text));
    setHaveNumbers(RegExp('[0-9]', 'g').test(text));
    setHaveSymbols(RegExp('[^A-z\\s\\d][\\\\^]?', 'g').test(text));
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
