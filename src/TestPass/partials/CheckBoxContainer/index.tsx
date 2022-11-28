import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {styles} from './styles';

export const CheckBoxContainer = ({visibility, setVisibility}: any) => {
  const onChangeVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={!visibility}
        onValueChange={onChangeVisibility}
        boxType="square"
        onTintColor="white"
        onCheckColor="white"
      />
      <Text style={styles.textBold}>Visualizar senha inserida</Text>
    </View>
  );
};
