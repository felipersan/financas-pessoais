import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {
  Background,
  Container,
  ThemePhoto,
  Text,
  Text2,
  AreaBtn,
  AreaBtn2,
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <Background>
      <Container>
        <ThemePhoto source={require('../../assets/themePhoto.png')} />
        <AreaBtn
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text> Sign In </Text>
          <Feather name="chevrons-right" color={'#fff'} size={19} />
        </AreaBtn>
        <AreaBtn2
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text2> Sign Up </Text2>
          <Feather name="chevrons-right" color={'#66b0ef'} size={19} />
        </AreaBtn2>
      </Container>
    </Background>
  );
}
