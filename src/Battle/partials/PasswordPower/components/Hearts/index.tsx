import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './styles';

export const Hearts = ({type, color}: any) => {
  return color === 'light-green' ? (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SUA SENHA É </Text>
        <Text style={styles.titleLightGreen}> {type}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../../../assets/images/green/light/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/light/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/light/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/light/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/light/heart.png')}
        />
      </View>
    </>
  ) : color === 'green' ? (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SUA SENHA É </Text>
        <Text style={styles.titleGreen}> {type}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../../../assets/images/green/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/green/broken-heart.png')}
        />
      </View>
    </>
  ) : color === 'yellow' ? (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SUA SENHA É </Text>
        <Text style={styles.titleYellow}> {type}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../../../assets/images/yellow/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/yellow/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/yellow/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/yellow/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/yellow/broken-heart.png')}
        />
      </View>
    </>
  ) : color === 'orange' ? (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SUA SENHA É </Text>
        <Text style={styles.titleOrange}> {type}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../../../assets/images/orange/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/orange/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/orange/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/orange/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/orange/broken-heart.png')}
        />
      </View>
    </>
  ) : color === 'red' ? (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SUA SENHA É </Text>
        <Text style={styles.titleRed}> {type}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../../../assets/images/red/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
      </View>
    </>
  ) : (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SUA SENHA É </Text>
        <Text style={styles.titleRed}> {type}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../../../assets/images/red/heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
        <Image
          source={require('../../../../../../assets/images/red/broken-heart.png')}
        />
      </View>
    </>
  );
};
