import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {BackButton, PasswordPower} from './partials';

import {styles} from './styles';

export const Battle = ({navigation, route}: any) => {
  const [colorValidation, setColorValidation] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>SUA SENHA É MUITO FRACA</Text>
          <PasswordPower
            password={route.params.password}
            haveLowerCase={route.params.haveLowerCase}
            haveUpperCase={route.params.haveUpperCase}
            haveNumbers={route.params.haveNumbers}
            haveSymbols={route.params.haveSymbols}
            setColorValidation={setColorValidation}
          />
        </View>

        <View style={styles.section}>
          <Image source={require('../../assets/images/placeholder.png')} />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Ela seria descoberta instatâneamente</Text>
          <Text style={styles.text}>
            Você pode melhorar sua senha combinando caracteres em letras
            maiúsculas, minúsculas, números e caracteres especiais. Tente evitar
            sequência de letras ou números e até evitar palavras do dicionário
            do seu idioma.
          </Text>
        </View>

        <View style={styles.section}>
          <BackButton navigation={navigation} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.text}>Créditos do infográfico</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
