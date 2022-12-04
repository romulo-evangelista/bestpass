import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const PasswordDetails = ({
  haveLowerCase,
  haveUpperCase,
  haveNumbers,
  haveSymbols,
}: any) => {
  return (
    <>
      <Text style={styles.text}>Você pode diversificar sua senha com:</Text>
      <View style={styles.details}>
        <Text style={haveLowerCase ? styles.textHighlight : styles.textOption}>
          {haveLowerCase && '✓ '}Minúscula
        </Text>
        <Text style={haveUpperCase ? styles.textHighlight : styles.textOption}>
          {haveUpperCase && '✓ '}Maiúscula
        </Text>
        <Text style={haveNumbers ? styles.textHighlight : styles.textOption}>
          {haveNumbers && '✓ '}Números
        </Text>
        <Text style={haveSymbols ? styles.textHighlight : styles.textOption}>
          {haveSymbols && '✓ '}Símbolos
        </Text>
      </View>
    </>
  );
};
