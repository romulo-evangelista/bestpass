import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  CheckBoxContainer,
  PasswordDetails,
  PasswordInput,
  PasswordPower,
  PasswordValidity,
} from './partials';

import {styles} from './styles';

export const TestPass = () => {
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [haveLowerCase, setHaveLowerCase] = useState(false);
  const [haveUpperCase, setHaveUpperCase] = useState(false);
  const [haveNumbers, setHaveNumbers] = useState(false);
  const [haveSymbols, setHaveSymbols] = useState(false);
  const [colorValidation, setColorValidation] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>SUA SENHA É SEGURA?</Text>
            <PasswordPower
              password={password}
              haveLowerCase={haveLowerCase}
              haveUpperCase={haveUpperCase}
              haveNumbers={haveNumbers}
              haveSymbols={haveSymbols}
              setColorValidation={setColorValidation}
            />
          </View>
          <View style={styles.section}>
            <PasswordInput
              password={password}
              setPassword={setPassword}
              visibility={visibility}
              setHaveLowerCase={setHaveLowerCase}
              setHaveUpperCase={setHaveUpperCase}
              setHaveNumbers={setHaveNumbers}
              setHaveSymbols={setHaveSymbols}
            />
            <Text style={styles.text}>
              Sua senha pode ter no máximo 18 caracteres
            </Text>
            <CheckBoxContainer
              visibility={visibility}
              setVisibility={setVisibility}
            />
          </View>
          <View style={styles.section}>
            <PasswordDetails
              password={password}
              haveLowerCase={haveLowerCase}
              haveUpperCase={haveUpperCase}
              haveNumbers={haveNumbers}
              haveSymbols={haveSymbols}
            />
          </View>
          {password.length > 0 ? (
            <PasswordValidity color={colorValidation} />
          ) : (
            <View style={styles.footer}>
              <Text style={styles.text}>
                Sua senha nunca será armazenada por aqui!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
