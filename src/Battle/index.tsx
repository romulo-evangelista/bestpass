import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {BackButton, PasswordPower} from './partials';

import {styles} from './styles';

export const Battle = ({navigation, route}: any) => {
  const [, setColorValidation] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.section}>
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
          <BackButton navigation={navigation} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.text}>Créditos do infográfico</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
