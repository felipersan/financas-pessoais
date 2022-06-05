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

export default function Cadastrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const {SignUp} = useContext(AuthContext);

  function handleSignUp() {
    SignUp(email, password, nome);
  }

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Initial');
        }}>
        <Feather name="chevron-left" size={25} color="#000" />
      </TouchableOpacity>

      <TitleText>Sign Up</TitleText>

      <ViewEmail>
        <TextDescription>Digite o seu Nome...</TextDescription>
        <TextInput
          value={nome}
          placeholder="ex: Felipe"
          onChangeText={text => {
            setNome(text);
          }}
        />
        <Component />
      </ViewEmail>
      <ViewEmail>
        <TextDescription>Digite o seu Email...</TextDescription>
        <TextInput
          value={email}
          placeholder="ex: exemplo@exemplo.com"
          onChangeText={text => {
            setEmail(text);
          }}
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

      <AreaBtn onPress={handleSignUp}>
        <TextBtn>Sign Up</TextBtn>
        <Feather name="chevrons-right" color={'#fff'} size={19} />
      </AreaBtn>
    </Container>
  );
}
