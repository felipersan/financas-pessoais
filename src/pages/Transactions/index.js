import React, {useState} from 'react';
import {Button} from 'react-native';
import {SafeAreaView} from 'react-native';

import Header from '../../components/Header';
import {
  Background,
  AreaHeader,
  AreaBtn,
  TextBtn,
  Image,
  SetTransaction,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';

import NewTransaction from '../../components/NewTransactions';

export default function Transactions() {
  const [height, setHeigth] = useState(0);
  const [borderLeft, setborderLeft] = useState(28);
  const [borderRigth, setBorderRigth] = useState(28);
  const [data, setData] = useState('');

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
    </Background>
  );
}
