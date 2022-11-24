import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {CheckBoxContainer, PasswordDetails, PasswordInput} from './components';

import {styles} from './styles';

const TestPass = () => {
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [haveLowerCase, setHaveLowerCase] = useState(false);
  const [haveUpperCase, setHaveUpperCase] = useState(false);
  const [haveNumbers, setHaveNumbers] = useState(false);
  const [haveSymbols, setHaveSymbols] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>SUA SENHA É SEGURA?</Text>
            <Text style={styles.text}>
              Digite no campo abaixo para descobrir em quanto tempo levaria para
              você ser hackeado
            </Text>
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
          <View style={styles.footer}>
            <Text style={styles.text}>
              Sua senha nunca será armazenada por aqui!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestPass;
