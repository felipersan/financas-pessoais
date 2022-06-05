import {color} from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  margin: 15px;
  justify-content: center;
`;

export const ViewCenter = styled.View`
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity``;

export const TitleText = styled.Text`
  font-size: 28px;
  color: #000;
  margin-top: 39px;
  font-weight: bold;
`;

export const TextDescription = styled.Text`
  font-size: 16px;
  margin-bottom: 1px;
  color: #121212;
`;

export const TextInput = styled.TextInput`
  background-color: transparent;
`;

export const ViewEmail = styled.View`
  margin-top: 25px;
`;

export const ViewPassword = styled.View`
  margin-top: 25px;
`;

export const Component = styled.View`
  background-color: #fa4f47;
  height: 1px;
  width: 100%;
`;

export const AreaBtn = styled.TouchableOpacity`
  margin-top: 45px;
  width: 80%;
  height: 72px;
  background-color: #fa4f47;
  align-items: center;
  justify-content: space-between;
  border-radius: 28px;
  flex-direction: row;
  padding-right: 24px;
  padding-left: 24px;
  elevation: 2;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  color: #fff;
`;
