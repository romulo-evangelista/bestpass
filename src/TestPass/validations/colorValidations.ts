export const colorValidations = ({
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
roxo - instantly
(password.length <= 10 && haveNumbers && !haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length <= 7 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length <= 6 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length <= 5 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length <= 5 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

vermelho - 1 secs to 19 hours
(password.length >= 11 && password.length <= 15 && haveNumbers && !haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 8 && password.length <= 10 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 7 && password.length <= 9 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 6 && password.length <= 8 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 6 && password.length <= 8 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

laranja - 1 day to 5 years
(password.length >= 16 && password.length <= 18 && haveNumbers && !haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 11 && password.length <= 13 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 10 && password.length <= 11 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 9 && password.length <= 10 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 9 && password.length <= 10 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

amarelo - 41 years to 800k years
(password.length >= 14 && password.length <= 17 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 12 && password.length <= 14 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 11 && password.length <= 13 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 11 && password.length <= 12 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)

verde - 2m years to 7qd years
(password.length >= 18 && haveNumbers && haveLowerCase && !haveUpperCase && !haveSymbols) ||
(password.length >= 15 && !haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 14 && haveNumbers && haveLowerCase && haveUpperCase && !haveSymbols) ||
(password.length >= 13 && haveNumbers && haveLowerCase && haveUpperCase && haveSymbols)
 */
