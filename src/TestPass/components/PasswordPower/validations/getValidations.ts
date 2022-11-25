export const getValidations = ({
  password,
  haveLowerCase,
  haveUpperCase,
  haveNumbers,
  haveSymbols,
}: any) => {
  const greenValidation =
    (password.length >= 18 &&
      haveNumbers &&
      haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 15 &&
      !haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 14 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 13 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      haveSymbols);

  const yellowValidation =
    (password.length >= 14 &&
      password.length <= 17 &&
      haveNumbers &&
      haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 12 &&
      password.length <= 14 &&
      !haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 11 &&
      password.length <= 13 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 11 &&
      password.length <= 12 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      haveSymbols);

  const orangeValidation =
    (password.length >= 16 &&
      password.length <= 18 &&
      haveNumbers &&
      !haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 11 &&
      password.length <= 13 &&
      haveNumbers &&
      haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 10 &&
      password.length <= 11 &&
      !haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 9 &&
      password.length <= 10 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 9 &&
      password.length <= 10 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      haveSymbols);

  const redValidation =
    (password.length >= 11 &&
      password.length <= 15 &&
      haveNumbers &&
      !haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 8 &&
      password.length <= 10 &&
      haveNumbers &&
      haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 7 &&
      password.length <= 9 &&
      !haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 6 &&
      password.length <= 8 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length >= 6 &&
      password.length <= 8 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      haveSymbols);

  const purpleValidation =
    (password.length <= 10 &&
      haveNumbers &&
      !haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length <= 7 &&
      haveNumbers &&
      haveLowerCase &&
      !haveUpperCase &&
      !haveSymbols) ||
    (password.length <= 6 &&
      !haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length <= 5 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      !haveSymbols) ||
    (password.length <= 5 &&
      haveNumbers &&
      haveLowerCase &&
      haveUpperCase &&
      haveSymbols);

  return {
    greenValidation,
    yellowValidation,
    orangeValidation,
    redValidation,
    purpleValidation,
  };
};

/**
roxo
(password.length <= 10 && haveNumbers && !haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length <= 7 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length <= 6 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length <= 5 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length <= 5 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

vermelho
(password.length >= 11 && password.length <= 15 && haveNumbers && !haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 8 && password.length <= 10 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 7 && password.length <= 9 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 6 && password.length <= 8 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 6 && password.length <= 8 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

laranja
(password.length >= 16 && password.length <= 18 && haveNumbers && !haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 11 && password.length <= 13 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 10 && password.length <= 11 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 9 && password.length <= 10 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 9 && password.length <= 10 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

amarelo
(password.length >= 14 && password.length <= 17 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 12 && password.length <= 14 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 11 && password.length <= 13 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 11 && password.length <= 12 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

verde
(password.length >= 18 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 15 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 14 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 13 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)
 */
