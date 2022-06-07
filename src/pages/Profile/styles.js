import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  margin: 20px;
  padding-top: 30px;
`;

export const Container = styled.View`
  align-items: center;
`;

export const Image = styled.Image`
  position: absolute;
  margin-top: -130px;
  margin-left: 130px;
`;

export const Touchable = styled.TouchableOpacity``;

export const ImagePerfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 40px;
`;

export const TextProfile = styled.Text`
  font-size: 18px;
  margin-top: 5;
  color: #282828;
`;

export const ViewInform = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextInform = styled.Text``;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background: #f64f46;
`;

export const TextInput = styled.TextInput``;

export const ViewName = styled.View``;

export const AreaBtn = styled.TouchableOpacity`
  margin-top: 45px;
  width: 80%;
  height: 72px;
  background-color: #21a0aa;
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
