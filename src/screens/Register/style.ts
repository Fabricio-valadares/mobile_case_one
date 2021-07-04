import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 35px 30px 30px 30px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFPercentage(5.5)}px;
  margin-bottom: 15px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 30px;
  /* align-items: center;
  justify-content: center; */
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fafafa;
`;

export const ViewInput = styled.View`
  width: 100%;
`;

export const ButtonStyles = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
`;

export const ViewText = styled.View``;

export const TextFinal = styled.Text``;

export const TextRegister = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 17px;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: left;
  width: 100%;
`;
