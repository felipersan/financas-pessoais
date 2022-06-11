import React, {useState, useContext} from 'react';
import {Keyboard} from 'react-native';
import {format} from 'date-fns';
import firebase from '../../services/firebaseConnection';
import {
  Container,
  Name,
  BtnType,
  AreaType,
  Icon,
  Value,
  Set,
  Given,
  Button,
  BtnContext,
} from './styles';
import {AuthContext} from '../../contexts/auth';

export default function NewTransactions({data, altura}) {
  const {user} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [value, setValue] = useState(null);
  const [given, setGiven] = useState('');
  const [type, setType] = useState('money');
  const [typeTransaction, setTypeTransaction] = useState('gasto');
  const [color, setColor] = useState('#65aded');

  function handleSubmit() {
    altura();
    if (isNaN(parseFloat(value))) {
      alert('Digite um numero como no exemplo');
      return;
    } else if (typeof name != 'string' || name == '') {
      alert('Digite um nome como no exemplo');
      return;
    } else if (given == '') {
      alert('Digite uma data como no exemplo');
      return;
    } else {
      addTransaction();
    }
  }

  async function addTransaction() {
    let uid = user.uid;
    let key = await firebase.database().ref('historico').child(uid).push().key;
    console.log(uid);
    console.log(key);
    await firebase
      .database()
      .ref('historico')
      .child(uid)
      .child(key)
      .set({
        color: color,
        name: name,
        value: parseFloat(value),
        given: given,
        type: type,
        typeTransaction: typeTransaction,
        date: format(new Date(), 'dd/MM/yy'),
      })
      .then(console.log('cadastrou'))
      .catch('não cadastrou');

    let usuario = firebase.database().ref('users').child(uid);
    await usuario.once('value', snapshot => {
      let saldo = parseFloat(snapshot.val().saldo);
      typeTransaction === 'gasto'
        ? (saldo -= parseFloat(value))
        : (saldo += parseFloat(value));
      console.log(saldo);
      usuario
        .child('saldo')
        .set(saldo)
        .then(alert('transferência cadastrada com sucesso !!!'))
        .catch('deu erro na hora de att o saldo');
    });
  }

  return (
    <Container>
      <Set>Qual o nome da transação ? </Set>
      <Name
        placeholder="Ex: Compra de mercado"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        keyboardType="default"
      />
      <Set>Qual o valor da transação ?</Set>
      <Value
        placeholder="Ex: 300,00 "
        value={value}
        onChangeText={text => {
          setValue(text);
        }}
      />
      <Set>Qual a data da transação ?</Set>
      <Given
        placeholder="Ex: 22/02/2022 "
        value={given}
        onChangeText={text => {
          setGiven(text);
        }}
      />
      <Set>Selecione o ícone da transação</Set>
      <AreaType>
        <BtnType
          background="#f64f46"
          onPress={() => {
            setColor('#f64f46');
            setType('drink');
            setTypeTransaction('gasto');
            Keyboard.dismiss();
          }}>
          <Icon source={require('../../assets/icons/bebida-de-coquetel.png')} />
        </BtnType>
        <BtnType
          background="#65aded"
          onPress={() => {
            setColor('#65aded');
            setType('medicine');
            setTypeTransaction('gasto');
            Keyboard.dismiss();
          }}>
          <Icon source={require('../../assets/icons/capsula.png')} />
        </BtnType>
        <BtnType
          background="#ffcf2d"
          onPress={() => {
            setColor('#ffcf2d');
            setType('market');
            setTypeTransaction('gasto');
            Keyboard.dismiss();
          }}>
          <Icon
            source={require('../../assets/icons/carrinho-de-compras.png')}
          />
        </BtnType>
        <BtnType
          background="#934673"
          onPress={() => {
            setColor('#934673');
            setTypeTransaction('gasto');
            setType('creditcard');
            Keyboard.dismiss();
          }}>
          <Icon source={require('../../assets/icons/cartao-do-banco.png')} />
        </BtnType>
        <BtnType
          background="#f64f46"
          onPress={() => {
            setColor('#f64f46');
            setTypeTransaction('gasto');
            setType('home');
            Keyboard.dismiss();
          }}>
          <Icon source={require('../../assets/icons/casa.png')} />
        </BtnType>
        <BtnType
          background="#219da7"
          onPress={() => {
            setColor('#219da7');
            setTypeTransaction('entrada');
            setType('money');
            Keyboard.dismiss();
          }}>
          <Icon source={require('../../assets/icons/nota-de-dolar.png')} />
        </BtnType>
      </AreaType>
      <Button onPress={handleSubmit}>
        <BtnContext>Enviar</BtnContext>
      </Button>
      <AreaType></AreaType>
    </Container>
  );
}
