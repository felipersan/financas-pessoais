import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';

import {
  Container,
  Image,
  ImagePerfil,
  Background,
  Touchable,
  TextProfile,
  ViewInform,
  TextInform,
  Line,
  TextInput,
  ViewName,
  AreaBtn,
  TextBtn,
  AreaBtn2,
  TextBtn2,
} from './styles';

export default function Profile() {
  const {user, Update, setUser, SignOut} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState(name);
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    let name = user.name;
    let nickName = user.nickName;
    let lastName = user.lastName;
    setName(name);
    setLastName(lastName);
    setNickname(nickName);
  }, []);

  function atualiza() {
    Update(name, lastName, nickname);
    let data = {
      uid: user.uid,
      name: name,
      email: user.email,
      lastName: lastName,
      nickname: nickname,
    };
    setUser(data);
    console.log(user);
  }

  return (
    <Background>
      <Image source={require('../../assets/organic.png')} />
      <Header color={'#000'} />
      <Container>
        <Touchable>
          <ImagePerfil source={require('../../assets/perfil.png')} />
        </Touchable>
        <TextProfile>
          {' '}
          Olá, {user.nickName ? user.nickName : user.name}
        </TextProfile>
      </Container>
      <View style={{marginTop: 60}}>
        <ViewInform>
          <ViewName>
            <TextInform> Seu Apelido </TextInform>
            <TextInput
              value={nickname}
              onChangeText={text => {
                setNickname(text);
              }}
            />
          </ViewName>
          <Touchable>
            <Feather name="check" color={'#000'} size={18} />
          </Touchable>
        </ViewInform>
        <Line />
      </View>
      <View style={{marginTop: 24}}>
        <ViewInform>
          <ViewName>
            <TextInform> Seu Nome </TextInform>
            <TextInput
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
          </ViewName>
          <Touchable>
            <Feather name="check" color={'#000'} size={18} />
          </Touchable>
        </ViewInform>
        <Line />
      </View>
      <View style={{marginTop: 24}}>
        <ViewInform>
          <ViewName>
            <TextInform> Seu Sobrenome </TextInform>
            <TextInput
              value={lastName}
              onChangeText={text => {
                setLastName(text);
              }}
            />
          </ViewName>
          <Touchable>
            <Feather name="check" color={'#000'} size={18} />
          </Touchable>
        </ViewInform>
        <Line />
      </View>
      <AreaBtn onPress={atualiza}>
        <TextBtn>Update</TextBtn>
        <Feather name="chevrons-right" color={'#fff'} size={19} />
      </AreaBtn>
      <AreaBtn2
        onPress={() => {
          SignOut();
        }}>
        <TextBtn2>Sair</TextBtn2>
        <Feather name="chevrons-right" color={'#fff'} size={19} />
      </AreaBtn2>
    </Background>
  );
}
