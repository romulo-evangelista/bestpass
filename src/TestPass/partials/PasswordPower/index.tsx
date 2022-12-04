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
    <>
      <Text style={styles.text}>
        Você já deve saber que é super importante ter uma senha segura, mas
        existem estudos de quanto tempo hackers realmente precisam para
        conseguir invadir sua segurança.
      </Text>
      <Text style={styles.text}>
        Digite uma senha abaixo e descubra as chances que ela teria em um embate
        contra o crime virtual. Nenhum dado será armazenado por aqui.
      </Text>
    </>
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
