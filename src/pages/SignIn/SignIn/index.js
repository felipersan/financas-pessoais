import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Image,
  TitleText,
  ViewCenter,
  TouchableOpacity,
  TextDescription,
  TextInput,
  Container2,
  ViewEmail,
  ViewPassword,
  Component,
  AreaBtn,
  TextBtn,
} from './styles';

import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../../../contexts/auth';

export default function Entrar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, SignIn} = useContext(AuthContext);

  const navigation = useNavigation();

  console.log(user);

  function handleSingIn() {
    SignIn(email, password);
  }

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Initial');
        }}>
        <Feather name="chevron-left" size={25} color="#000" />
      </TouchableOpacity>
      <ViewCenter>
        <Image source={require('../../../assets/SignIn.png')} />
      </ViewCenter>

      <TitleText>Sign In</TitleText>

      <ViewEmail>
        <TextDescription>Digite o seu Email...</TextDescription>
        <TextInput
          placeholder="ex: exemplo@exemplo.com"
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
        />
        <Component />
      </ViewEmail>
      <ViewPassword>
        <TextDescription>Digite a sua senha...</TextDescription>
        <TextInput
          placeholder="***********"
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
        />
        <Component />
      </ViewPassword>

      <AreaBtn onPress={handleSingIn}>
        <TextBtn>SignIn</TextBtn>
        <Feather name="chevrons-right" color={'#fff'} size={19} />
      </AreaBtn>
    </Container>
  );
}
