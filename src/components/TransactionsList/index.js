import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  Icon,
  ViewExpenseType,
  ExpenseType,
  Given,
  ExpenseValue,
  AreaExpense,
  IconImage,
} from './styles.js';

export default function TransactionsList({data}) {
  return (
    <Container>
      <AreaExpense>
        <Icon color={data.color}>
          {data.type === 'drink' && (
            <IconImage
              source={require('../../assets/icons/bebida-de-coquetel.png')}
            />
          )}
          {data.type === 'medicine' && (
            <IconImage source={require('../../assets/icons/capsula.png')} />
          )}
          {data.type === 'market' && (
            <IconImage
              source={require('../../assets/icons/carrinho-de-compras.png')}
            />
          )}
          {data.type === 'creditcard' && (
            <IconImage
              source={require('../../assets/icons/cartao-do-banco.png')}
            />
          )}
          {data.type === 'home' && (
            <IconImage source={require('../../assets/icons/casa.png')} />
          )}
          {data.type === 'money' && (
            <IconImage
              source={require('../../assets/icons/nota-de-dolar.png')}
            />
          )}
        </Icon>
        <ViewExpenseType>
          <ExpenseType>{data.name} </ExpenseType>
          <Given>{data.given}</Given>
        </ViewExpenseType>
      </AreaExpense>

      <ExpenseValue>
        {' '}
        {data.typeTransaction == 'gasto' ? '-' : '+'}
        {data.value}{' '}
      </ExpenseValue>
    </Container>
  );
}
