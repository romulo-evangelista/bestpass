import React from 'react';
import {Text, View} from 'react-native';
import {Hearts} from '../Hearts';
import {Illustration} from '../Illustration';

import {styles} from './styles';

export const Result = ({type, color, time, description}: any) => {
  return (
    <View style={styles.container}>
      <Hearts type={type} color={color} />

      <Illustration color={color} />

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
