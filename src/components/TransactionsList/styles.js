import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 12px;
`;

export const AreaExpense = styled.View`
  flex-direction: row;
`;

export const Icon = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #21a0aa;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const ViewExpenseType = styled.View`
  justify-content: center;
`;

export const ExpenseType = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const Given = styled.Text`
  color: #bfbfbf;
  font-size: 13px;
`;

export const ExpenseValue = styled.Text`
  font-size: 16px;
  color: #000;
`;
