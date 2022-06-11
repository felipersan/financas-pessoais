import styled from 'styled-components/native';
import {Pressable, flatList} from 'react-native';

export const Background = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 45px;
`;

export const Image = styled.Image`
  position: absolute;
  margin-top: -130px;
  margin-left: 130px;
`;

export const AreaHeader = styled.View``;

export const AreaBtn = styled.Pressable`
  margin-top: 15px;
  width: 100%;
  height: 72px;
  background-color: #21a0aa;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: ${props => props.borderLeft};
  border-bottom-right-radius: ${props => props.borderRigth};
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  flex-direction: row;
  padding-right: 24px;
  padding-left: 24px;
  elevation: 2;
  border-color: #fff;
  border-width: 2px;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SetTransaction = styled.View`
  width: 100%;
  height: ${props => props.height};
  background-color: #fff;
`;

export const TransactionHistory = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

export const List = styled.FlatList``;
