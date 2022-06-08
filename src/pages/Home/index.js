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
  Transactions,
  BtnTransactions,
  TextTransactions,
  BtnImage,
  TransactionHistory,
  List,
} from './styles';

import Header from '../../components/Header';
import TransactionsList from '../../components/TransactionsList';

export default function Home() {
  const {user} = useContext(AuthContext);
  const [valBalance, setValBalance] = useState('');
  const [transactions, setTransactions] = useState([
    {
      key: '1',
      tipo: 'despesa',
      setor: 'academia',
      given: '03/02/2022',
      valor: '70,00',
    },
    {
      key: '2',
      tipo: 'despesa',
      setor: 'compras',
      given: '04/02/2022',
      valor: '200,00',
    },
    {
      key: '3',
      tipo: 'receita',
      setor: 'venda',
      given: '23/02/2022',
      valor: '100,00',
    },
    {
      key: '4',
      tipo: 'despesa',
      setor: 'compras',
      given: '22/02/2022',
      valor: '427,00',
    },
  ]);
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
          <TextBalance>Seu Saldo total </TextBalance>
          <ValueBalance>R$ {valBalance}</ValueBalance>
          <TransactionHistory>
            <List
              showsVerticalScrollIndicator={false}
              data={transactions}
              keyExtractor={item => item.key}
              renderItem={({item}) => <TransactionsList data={item} />}
            />
          </TransactionHistory>
        </Balance>
        <Transactions>
          <BtnTransactions>
            <BtnImage source={require('../../assets/BtnImage.png')} />
            <TextTransactions>Veja todas as suas transações </TextTransactions>
          </BtnTransactions>
        </Transactions>
      </Body>
    </Container>
  );
}
