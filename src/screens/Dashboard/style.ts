import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #eae8fe;
  justify-content: space-between;
`;

export const Logout = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ViewLogout = styled.View`
  width: 100%;
  margin-top: 60px;
  margin-left: 40px;
`;

export const ButtonStyled = styled.TouchableOpacity`
  background-color: #e5e0fd;
  width: 80%;
  padding: 20px;
  border-top-left-radius: 50;
  border-top-right-radius: 50;
  border-bottom-left-radius: 50;
  border-bottom-right-radius: 50;
  align-items: center;

  margin-top: 40px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextEmail = styled.Text`
  background-color: #e5e0fd;
  padding: 8px 10px;
  margin-top: 10px;
  border-top-left-radius: 7;
  border-top-right-radius: 7;
  border-bottom-left-radius: 7;
  border-bottom-right-radius: 7;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NameUser = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Welcome = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Content = styled.View`
  width: 100%;
`;

export const ViewImage = styled.View`
  margin-top: -350px;
`;

export const Photo = styled.Image`
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(45)}px;
`;

export const ViewTextInButton = styled.View`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 40;
  border-top-right-radius: 40;
  height: ${RFPercentage(55)}px;
  width: 100%;
`;

export const Icon = styled(Feather)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 5px 0 0 0;
`;

export const ViewTextButton = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 30%;
`;
