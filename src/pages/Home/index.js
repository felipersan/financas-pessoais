import React, {useContext, useState, useEffect} from 'react';
import {Button} from 'react-native';
import firebase from '../../services/firebaseConnection';
import {AuthContext} from '../../contexts/auth';

import {
  Container,
  ViewHeader,
  ProfilePicture,
  Body,
  ProfileName,
  AreaHeader,
  Balance,
  TextBalance,
  ValueBalance,
} from './styles';
import Header from '../../components/Header';

export default function Home() {
  const {user, SignOut} = useContext(AuthContext);
  const [ValBalance, setValBalance] = useState('');
  const name = user.name.toUpperCase();

  useEffect(() => {
    async function takeBalance() {
      await firebase
        .database()
        .ref('users')
        .child(user.uid)
        .on('value', snapshot => {
          setValBalance(snapshot.val().saldo);
        });
    }
    takeBalance();
  }, []);

  return (
    <Container>
      <ViewHeader>
        <AreaHeader>
          <Header color={'#fff'} />
          <ProfilePicture source={require('../../assets/perfil.png')} />
        </AreaHeader>
        <ProfileName>BOM DIA {name}</ProfileName>
      </ViewHeader>
      <Body>
        <Balance>
          <TextBalance> Seu Saldo total </TextBalance>
          <ValueBalance>{ValBalance}</ValueBalance>
        </Balance>
        <Button onPress={() => SignOut()} title={'deslogar'} />
      </Body>
    </Container>
  );
}
