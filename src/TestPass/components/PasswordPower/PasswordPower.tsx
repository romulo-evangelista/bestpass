import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {colorValidations} from '../../validations/colorValidations';

import {styles} from './styles';

export const PasswordPower = ({
  password,
  haveLowerCase,
  haveUpperCase,
  haveNumbers,
  haveSymbols,
  setColorValidation,
}: any) => {
  const {
    greenValidation,
    yellowValidation,
    orangeValidation,
    redValidation,
    purpleValidation,
  } = colorValidations({
    password,
    haveLowerCase,
    haveUpperCase,
    haveNumbers,
    haveSymbols,
  });

  useEffect(() => {
    setColorValidation(
      greenValidation
        ? 'green'
        : yellowValidation
        ? 'yellow'
        : orangeValidation
        ? 'orange'
        : redValidation
        ? 'red'
        : purpleValidation
        ? 'purple'
        : 'purple',
    );
  });

  return !haveLowerCase && !haveUpperCase && !haveNumbers && !haveSymbols ? (
    <Text style={styles.text}>
      Digite no campo abaixo para descobrir em quanto tempo levaria para você
      ser hackeado
    </Text>
  ) : greenValidation ? (
    <Text style={styles.greenText}>🙂 Sim, sua senha é bem forte</Text>
  ) : yellowValidation || orangeValidation ? (
    <Text style={styles.yellowText}>
      😐 Não, ainda há melhorias a serem feitas
    </Text>
  ) : redValidation || purpleValidation ? (
    <Text style={styles.redText}>🙁 Nenhum pouco, sua senha é bem fraca</Text>
  ) : (
    <Text style={styles.redText}>🙁 Nenhum pouco, sua senha é bem fraca</Text>
  );
};
