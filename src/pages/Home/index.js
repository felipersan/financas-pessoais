import React, {useContext, useState, useEffect} from 'react';
import firebase from '../../services/firebaseConnection';
import {format} from 'date-fns';
import {AuthContext} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';

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
  const [valBalance, setValBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const myName = user.name.toUpperCase();
  const navigation = useNavigation();

  useEffect(() => {
    async function takeBalance() {
      await firebase
        .database()
        .ref('users')
        .child(user.uid)
        .on('value', snapshot => {
          let saldo = parseFloat(snapshot.val().saldo).toFixed(2);
          setValBalance(saldo);
        });
    }
    takeBalance();
  }, []);

  useEffect(() => {
    async function takeTransations() {
      await firebase
        .database()
        .ref('historico')
        .child(user.uid)
        .orderByChild('date')
        .equalTo(format(new Date(), 'dd/MM/yy'))
        .on('value', snapshot => {
          setTransactions([]);
          snapshot.forEach(childitem => {
            let list = {
              key: childitem.key,
              color: childitem.val().color,
              name: childitem.val().name,
              value: childitem.val().value,
              given: childitem.val().given,
              type: childitem.val().type,
              typeTransaction: childitem.val().typeTransaction,
              date: childitem.val().date,
            };
            setTransactions(oldArray => [...oldArray, list]);
          });
        });
    }
    takeTransations();
  }, []);

  return (
    <Container>
      <ViewHeader>
        <AreaHeader>
          <Header color={'#fff'} />
          <ProfilePicture source={require('../../assets/perfil.png')} />
        </AreaHeader>
        <ProfileName>BOM DIA {myName}</ProfileName>
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
          <BtnTransactions onPress={() => navigation.navigate('Transactions')}>
            <BtnImage source={require('../../assets/BtnImage.png')} />
            <TextTransactions>Veja todas as suas transações </TextTransactions>
          </BtnTransactions>
        </Transactions>
      </Body>
    </Container>
  );
}
