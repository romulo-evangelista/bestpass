import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {PasswordButton, PasswordDetails, PasswordInput} from './partials';

import {styles} from './styles';

export const Home = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [haveLowerCase, setHaveLowerCase] = useState(false);
  const [haveUpperCase, setHaveUpperCase] = useState(false);
  const [haveNumbers, setHaveNumbers] = useState(false);
  const [haveSymbols, setHaveSymbols] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>
            Em Quanto tempo um Hacker QUEBRA sua senha?
          </Text>
          <Text style={styles.text}>
            Você já deve saber que é super importante ter uma senha segura, mas
            existem estudos de quanto tempo hackers realmente precisam para
            conseguir invadir sua segurança.
          </Text>
          <Text style={styles.text}>
            Digite uma senha abaixo e descubra as chances que ela teria em um
            embate contra o crime virtual. Nenhum dado será armazenado por aqui.
          </Text>
        </View>

        <View style={styles.section}>
          <PasswordInput
            password={password}
            setPassword={setPassword}
            visibility={visibility}
            setVisibility={setVisibility}
            setHaveLowerCase={setHaveLowerCase}
            setHaveUpperCase={setHaveUpperCase}
            setHaveNumbers={setHaveNumbers}
            setHaveSymbols={setHaveSymbols}
          />
          <Text style={styles.text}>
            Sua senha pode ter no máximo 18 caracteres
          </Text>
          <PasswordDetails
            password={password}
            haveLowerCase={haveLowerCase}
            haveUpperCase={haveUpperCase}
            haveNumbers={haveNumbers}
            haveSymbols={haveSymbols}
          />
        </View>

        <View style={styles.section}>
          <PasswordButton
            navigation={navigation}
            password={password}
            haveLowerCase={haveLowerCase}
            haveUpperCase={haveUpperCase}
            haveNumbers={haveNumbers}
            haveSymbols={haveSymbols}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.text}>Créditos do infográfico</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
