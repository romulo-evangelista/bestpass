import React from 'react';
import {colorValidations} from '../../validations/colorValidations';
import {Result} from './components';

export const PasswordPower = ({
  password,
  haveLowerCase,
  haveUpperCase,
  haveNumbers,
  haveSymbols,
}: any) => {
  const {
    lightGreenValidation,
    greenValidation,
    yellowValidation,
    orangeValidation,
    redValidation,
  } = colorValidations({
    password,
    haveLowerCase,
    haveUpperCase,
    haveNumbers,
    haveSymbols,
  });

  return lightGreenValidation ? (
    <Result
      type="MUITO FORTE"
      color="light-green"
      time="100 mil anos"
      description="Parabéns você tem uma senha campeã. Se quiser continuar melhorando sua senha, tente evitar sequência de letras ou números e até evitar palavras do dicionário do seu idioma, caso não tenha feito ainda."
    />
  ) : greenValidation ? (
    <Result
      type="FORTE"
      color="green"
      time="10 anos"
      description="Você pode melhorar sua senha combinando caracteres em letras maiúsculas, minúsculas, números e caracteres especiais. Tente evitar sequência de letras ou números e até evitar palavras do dicionário do seu idioma."
    />
  ) : yellowValidation ? (
    <Result
      type="INTERMEDIÁRIA"
      color="yellow"
      time="5 meses"
      description="Você pode melhorar sua senha combinando caracteres em letras maiúsculas, minúsculas, números e caracteres especiais. Tente evitar sequência de letras ou números e até evitar palavras do dicionário do seu idioma."
    />
  ) : orangeValidation ? (
    <Result
      type="FRACA"
      color="orange"
      time="5 dias"
      description="Você pode melhorar sua senha combinando caracteres em letras maiúsculas, minúsculas, números e caracteres especiais. Tente evitar sequência de letras ou números e até evitar palavras do dicionário do seu idioma."
    />
  ) : redValidation ? (
    <Result
      type="MUITO FRACA"
      color="red"
      time="instantâneamente"
      description="Você pode melhorar sua senha combinando caracteres em letras maiúsculas, minúsculas, números e caracteres especiais. Tente evitar sequência de letras ou números e até evitar palavras do dicionário do seu idioma."
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
