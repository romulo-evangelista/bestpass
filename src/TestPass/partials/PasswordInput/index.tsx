import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export const PasswordInput = ({
  password,
  setPassword,
  visibility,
  setVisibility,
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

  const onMagicTap = () => {
    setVisibility(!visibility);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={password}
        maxLength={18}
        onChangeText={onChangeText}
        secureTextEntry={visibility}
        style={styles.password}
        inlineImageLeft={'../../../../assets/images/icons/eye-open.png'}
      />
      <TouchableOpacity onPress={onMagicTap}>
        <Image
          source={
            visibility
              ? require('../../../../assets/images/icons/eye-open.png')
              : require('../../../../assets/images/icons/eye-closed.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};
