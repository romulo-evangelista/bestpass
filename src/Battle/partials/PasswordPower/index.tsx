import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {colorValidations} from '../../validations/colorValidations';

import {styles} from './styles';

export const PasswordPower = ({
  password,
  haveLowerCase,
  haveUpperCase,
  haveNumbers,
  haveSymbols,
  setColorValidation,
}: any) => {
  const {
    greenValidation,
    yellowValidation,
    orangeValidation,
    redValidation,
    purpleValidation,
  } = colorValidations({
    password,
    haveLowerCase,
    haveUpperCase,
    haveNumbers,
    haveSymbols,
  });

  useEffect(() => {
    setColorValidation(
      greenValidation
        ? 'green'
        : yellowValidation
        ? 'yellow'
        : orangeValidation
        ? 'orange'
        : redValidation
        ? 'red'
        : purpleValidation
        ? 'purple'
        : 'purple',
    );
  });

  return !haveLowerCase && !haveUpperCase && !haveNumbers && !haveSymbols ? (
    <></>
  ) : greenValidation ? (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/green/heart.png')} />
      <Image source={require('../../../../assets/images/green/heart.png')} />
      <Image source={require('../../../../assets/images/green/heart.png')} />
      <Image source={require('../../../../assets/images/green/heart.png')} />
      <Image
        source={require('../../../../assets/images/green/broken-heart.png')}
      />
    </View>
  ) : yellowValidation ? (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/yellow/heart.png')} />
      <Image source={require('../../../../assets/images/yellow/heart.png')} />
      <Image source={require('../../../../assets/images/yellow/heart.png')} />
      <Image
        source={require('../../../../assets/images/yellow/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/yellow/broken-heart.png')}
      />
    </View>
  ) : orangeValidation ? (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/orange/heart.png')} />
      <Image source={require('../../../../assets/images/orange/heart.png')} />
      <Image
        source={require('../../../../assets/images/orange/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/orange/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/orange/broken-heart.png')}
      />
    </View>
  ) : redValidation || purpleValidation ? (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/red/heart.png')} />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/red/heart.png')} />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
      <Image
        source={require('../../../../assets/images/red/broken-heart.png')}
      />
    </View>
  );
};
