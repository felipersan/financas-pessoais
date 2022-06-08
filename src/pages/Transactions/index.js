import React, {useState} from 'react';
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
import {set} from 'react-native-reanimated';

export default function Transactions() {
  const [height, setHeigth] = useState(0);
  const [borderLeft, setborderLeft] = useState(28);
  const [borderRigth, setBorderRigth] = useState(28);

  function changeHeigth() {
    if (height === 0) {
      setHeigth(400);
      setBorderRigth(0);
      setborderLeft(0);
    } else {
      setHeigth(0);
      setBorderRigth(28);
      setborderLeft(28);
    }
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
          <TextBtn>Cadastrar uma nova Transação </TextBtn>
          <Feather name="chevrons-down" color={'#fff'} size={19} />
        </AreaBtn>
        <SetTransaction height={height}></SetTransaction>
      </AreaHeader>
    </Background>
  );
}
