import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Credits} from '../components';
import {BackButton, PasswordPower} from './partials';

import {styles} from './styles';

export const Battle = ({navigation, route}: any) => {
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
          />
        </View>

        <View style={styles.section}>
          <BackButton navigation={navigation} />
        </View>

        <View style={styles.footer}>
          <Credits />
        </View>
      </View>

      <View style={styles.background}>
        <Image source={require('../../assets/images/bg-top.png')} />
        <Image source={require('../../assets/images/bg-bottom.png')} />
      </View>
    </SafeAreaView>
  );
};
