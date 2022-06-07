import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const ViewHeader = styled.View`
  max-width: 100%;
  align-items: center;
  padding-top: 67px;
  padding-left: 30px;
  padding-right: 30px;
  height: 310px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #66b0ef;
  elevation: 2;
`;

export const AreaHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 18px;
`;

export const ProfileName = styled.Text`
  margin-top: 6px;
  font-size: 32px;
  width: 80%;
  color: #fff;
`;

export const Body = styled.View`
  margin-top: -80px;
  elevation: 2;
`;

export const Balance = styled.View`
  margin-left: 30px;
  margin-right: 30px;
  background-color: #fff;

  border-radius: 40px;
  padding: 30px;
`;

export const TextBalance = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const ValueBalance = styled.Text`
  color: #505050;
  font-size: 30px;
  margin-top: 8px;
`;

export const TransactionHistory = styled.View``;

export const List = styled.FlatList``;

export const Transactions = styled.View`
  margin-left: 30px;
  margin-right: 30px;
`;

export const BtnTransactions = styled.TouchableOpacity`
  margin-top: 21px;
  height: 151px;
  justify-content: center;
  position: relative;
`;

export const BtnImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const TextTransactions = styled.Text`
  font-size: 20px;
  color: #fff;
  margin: 32px;
`;
