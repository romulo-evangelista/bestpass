import React from 'react';
import {Image, Text, View} from 'react-native';
import {Hearts} from '../Hearts';

import {styles} from './styles';

export const Result = ({type, color, time, description}: any) => {
  return (
    <View style={styles.container}>
      <Hearts type={type} color={color} />

      <View style={styles.section}>
        <Image
          source={require('../../../../../../assets/images/placeholder.png')}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.textContainer}>
          {color === 'red' ? (
            <Text style={styles.text16}>Ela seria descoberta </Text>
          ) : (
            <Text style={styles.text16}>Ela seria descoberta em </Text>
          )}
          <Text style={styles.textBold16}> {time}</Text>
        </View>

        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};
