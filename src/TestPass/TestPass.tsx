import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {styles} from './styles';

// const onChangeText = (text: String) => {
//   return text;
// };

const TestPass = () => {
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
            <TextInput
              onChangeText={() => {}}
              value=""
              style={styles.password}
              secureTextEntry={true}
            />
            <Text style={styles.text}>
              Sua senha pode ter no máximo 18 caracteres
            </Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={true}
                boxType="square"
                onValueChange={() => {}}
                onCheckColor="white"
                onTintColor="white"
              />
              <Text style={styles.textBold}> Visualizar senha inserida</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>
              No momento a senha tem 0 caracteres e possui:
            </Text>
            <Text style={styles.text}>
              Minúscula | Maiúscula | Números | Símbolos
            </Text>
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
