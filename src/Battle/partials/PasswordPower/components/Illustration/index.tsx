import React from 'react';
import {Image, View} from 'react-native';

import {styles} from './styles';

export const Illustration = ({color}: any) => {
  const url =
    color === 'light-green'
      ? require('../../../../../../assets/images/green/light/illustration.png')
      : color === 'green'
      ? require('../../../../../../assets/images/green/illustration.png')
      : color === 'yellow'
      ? require('../../../../../../assets/images/yellow/illustration.png')
      : color === 'orange'
      ? require('../../../../../../assets/images/orange/illustration.png')
      : color === 'red'
      ? require('../../../../../../assets/images/red/illustration.png')
      : require('../../../../../../assets/images/red/illustration.png');

  return (
    <View style={styles.section}>
      <Image source={url} />
    </View>
  );
};
