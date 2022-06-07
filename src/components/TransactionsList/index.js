import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  Icon,
  ViewExpenseType,
  ExpenseType,
  Given,
  ExpenseValue,
  AreaExpense,
} from './styles.js';

export default function TransactionsList({data}) {
  return (
    <Container>
      <AreaExpense>
        <Icon>
          <Feather name={'credit-card'} size={25} color="#fff" />
        </Icon>
        <ViewExpenseType>
          <ExpenseType>{data.setor} </ExpenseType>
          <Given>{data.given}</Given>
        </ViewExpenseType>
      </AreaExpense>

      <ExpenseValue>
        {' '}
        {data.tipo == 'despesa' ? '-' : '+'}
        {data.valor}{' '}
      </ExpenseValue>
    </Container>
  );
}
