import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 6px;
`;

export const Set = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #000;
`;

export const Name = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  background-color: #219da7;
  margin-top: 5px;
  padding: 3px;
  padding-left: 10px;
  width: 80%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #000;
`;

export const Value = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  background-color: #219da7;
  margin-top: 5px;
  padding: 3px;
  padding-left: 10px;
  width: 80%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #000;
`;

export const Given = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  background-color: #219da7;
  margin-top: 5px;
  padding: 3px;
  padding-left: 10px;
  width: 80%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #000;
`;

export const AreaType = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const BtnType = styled.TouchableOpacity`
  background-color: ${props => props.background};
  padding: 8px;
  border-radius: 37.5px;
  margin: 4px;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const Button = styled.TouchableOpacity`
  margin: 5px;
  margin-top: 10px;
  align-items: center;
  height: 35px;
  justify-content: center;
  background-color: #219da7;
  width: 50%;
  border-radius: 10px;
  padding: 3px;
  border-width: 1px;
`;

export const BtnContext = styled.Text`
  color: #fff;
  font-size: 18px;
`;
