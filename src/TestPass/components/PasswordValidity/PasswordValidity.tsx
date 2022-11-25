import React from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from './styles';

export const PasswordValidity = ({color}: any) => {
  const colorStatus: any =
    color === 'green'
      ? {
          imageUrl: require('../../../../assets/images/green/50-years.png'),
          text: 'Sua senha seria descoberta em 50 anos. Você pensou como seria voltar isso no tempo? Talvez nesse estivesse vivendo por um período que verificadores de senha não fossem tão importantes.',
        }
      : color === 'yellow' || color === 'orange'
      ? {
          imageUrl: require('../../../../assets/images/yellow/5-days.png'),
          text: 'Sua senha deria descoberta em 5 dias. Sua mente pode até te dizer para deixar para amanhã o que podia ser feito hoje, mas você pode ter que conviver com a terrível lembrança da sua senha hackeada como se fosse ontem.',
        }
      : color === 'red' || color === 'purple'
      ? {
          imageUrl: require('../../../../assets/images/red/instantly.png'),
          text: 'Sua senha seria descoberta instataneamente. Não é como o macarrão instantâneo que demora um pouco mais de 3 minutos, é tipo agora mesmo. Troque sua senha antes que hackers abocanhem sua conta.',
        }
      : '';

  return (
    <View style={styles.container}>
      <Image source={colorStatus.imageUrl} />
      <Text style={styles.text}> {colorStatus.text}</Text>
    </View>
  );
};
