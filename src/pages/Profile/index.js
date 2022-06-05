import React from 'react';
import {View, Text} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {Container, Image, TouchBack, ImagePerfil, Background} from './styles';

export default function Profile() {
  return (
    <Background>
      <Image source={require('../../assets/organic.png')} />
      <TouchBack>
        <Feather name="chevron-left" color={'#000'} size={29} />
      </TouchBack>
      <Container>
        <ImagePerfil source={require('../../assets/perfil.png')} />
      </Container>
    </Background>
  );
}
