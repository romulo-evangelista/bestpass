import React, {useEffect} from 'react';
import {colorValidations} from '../../validations/colorValidations';
import {Result} from './components';

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

  return greenValidation ? (
    <Result
      type="MUITO FORTE"
      color="green"
      time="100 mil anos"
      description="Aqui você pode envitarTente evitar sequência de letras ou números e
      até evitar palavras do dicionário do seu idioma."
    />
  ) : yellowValidation ? (
    <Result
      type="INTERMEDIÁRIA"
      color="yellow"
      time="5 meses"
      description="Você pode melhorar sua senha combinando caracteres em letras
      maiúsculas, minúsculas, números e caracteres especiais. Tente evitar
      sequência de letras ou números e até evitar palavras do dicionário do
      seu idioma."
    />
  ) : orangeValidation ? (
    <Result
      type="FRACA"
      color="orange"
      time="5 dias"
      description="Você pode melhorar sua senha combinando caracteres em letras
      maiúsculas, minúsculas, números e caracteres especiais. Tente evitar
      sequência de letras ou números e até evitar palavras do dicionário do
      seu idioma."
    />
  ) : redValidation || purpleValidation ? (
    <Result
      type="MUITO FRACA"
      color="red"
      time="instatâneamente"
      description="Você pode melhorar sua senha combinando caracteres em letras
      maiúsculas, minúsculas, números e caracteres especiais. Tente evitar
      sequência de letras ou números e até evitar palavras do dicionário do
      seu idioma."
    />
  ) : (
    <Result
      type="MUITO FRACA"
      color="red"
      time="instatâneamente"
      description="Você pode melhorar sua senha combinando caracteres em letras
      maiúsculas, minúsculas, números e caracteres especiais. Tente evitar
      sequência de letras ou números e até evitar palavras do dicionário do
      seu idioma."
    />
  );
};
