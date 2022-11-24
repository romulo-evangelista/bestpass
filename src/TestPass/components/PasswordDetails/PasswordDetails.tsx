import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const PasswordDetails = ({
  password,
  haveLowerCase,
  haveUpperCase,
  haveNumbers,
  haveSymbols,
}: any) => {
  return (
    <>
      <Text style={styles.text}>
        No momento a senha tem {password.length} caracteres e possui:
      </Text>
      <View style={styles.details}>
        <Text style={haveLowerCase ? styles.textHighlight : styles.text}>
          {haveLowerCase && 'AAA '}Minúscula
        </Text>
        <Text style={styles.text}> | </Text>
        <Text style={haveUpperCase ? styles.textHighlight : styles.text}>
          {haveUpperCase && 'AAA '}Maiúscula
        </Text>
        <Text style={styles.text}> | </Text>
        <Text style={haveNumbers ? styles.textHighlight : styles.text}>
          {haveNumbers && 'AAA '}Números
        </Text>
        <Text style={styles.text}> | </Text>
        <Text style={haveSymbols ? styles.textHighlight : styles.text}>
          {haveSymbols && 'AAA '}Símbolos
        </Text>
      </View>
    </>
  );
};
