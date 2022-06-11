import React, {useState, useEffect, useContext} from 'react';
import firebase from '../../services/firebaseConnection';
import TransactionsList from '../../components/TransactionsList';

import Header from '../../components/Header';
import {
  Background,
  AreaHeader,
  AreaBtn,
  TextBtn,
  Image,
  SetTransaction,
  TransactionHistory,
  List,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';

import NewTransaction from '../../components/NewTransactions';
import {AuthContext} from '../../contexts/auth';

export default function Transactions() {
  const [height, setHeigth] = useState(0);
  const [borderLeft, setborderLeft] = useState(28);
  const [borderRigth, setBorderRigth] = useState(28);
  const [data, setData] = useState('');
  const [transactions, setTransactions] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    async function takeTransations() {
      await firebase
        .database()
        .ref('historico')
        .child(user.uid)
        .orderByChild('given')
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
            setTransactions(oldArray => [list, ...oldArray]);
          });
        });
    }
    takeTransations();
  }, []);

  function changeHeigth() {
    if (height === 0) {
      setHeigth(385);
      setBorderRigth(0);
      setborderLeft(0);
    } else {
      setBorderRigth(28);
      setborderLeft(28);
      setHeigth(0);
    }
  }

  if (data) {
    console.log(data);
  }

  return (
    <Background>
      <Image source={require('../../assets/organic.png')} />
      <AreaHeader>
        <Header color={'#000'} />
        <AreaBtn
          onPress={changeHeigth}
          borderLeft={borderLeft}
          borderRigth={borderRigth}>
          <TextBtn>
            {' '}
            {height != 0
              ? 'Clique aqui para cadastrar'
              : 'Cadastrar uma nova transação '}
          </TextBtn>
          <Feather
            name={height != 0 ? 'chevrons-up' : 'chevrons-down'}
            color={'#fff'}
            size={19}
          />
        </AreaBtn>
        <SetTransaction height={height}>
          {height !== 0 && (
            <NewTransaction
              data={item => {
                setData(item);
              }}
              altura={() => {
                changeHeigth();
              }}
            />
          )}
        </SetTransaction>
      </AreaHeader>
      <TransactionHistory>
        <List
          showsVerticalScrollIndicator={false}
          data={transactions}
          keyExtractor={item => item.key}
          renderItem={({item}) => <TransactionsList data={item} />}
        />
      </TransactionHistory>
    </Background>
  );
}
