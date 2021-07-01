import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Container,
  ViewInput,
  Title,
  TextRegister,
  TextButton,
  SubTitle,
  Form,
  Input,
  ButtonStyles,
  ViewText,
  TextFinal,
  ForgotPassword,
} from "./style";

const Login = ({ navigation }: any) => {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ width: "100%", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Title>ENTRAR</Title>
        <SubTitle>O seu passaporte para o futuro.</SubTitle>

        <Form>
          <ViewInput>
            <Input placeholder="E-mail/CPF"></Input>
          </ViewInput>
          <ViewInput>
            <Input placeholder="Senha"></Input>
          </ViewInput>
          <ButtonStyles activeOpacity={0.9}>
            <TextButton>LOGIN</TextButton>
          </ButtonStyles>
        </Form>
        <ViewText>
          <TextFinal>
            Não possui uma conta?{" "}
            <TextRegister onPress={() => navigation.navigate("register")}>
              Registrar-se
            </TextRegister>
          </TextFinal>
          <ForgotPassword onPress={() => navigation.navigate("forgot")}>
            Esqueceu a senha?
          </ForgotPassword>
        </ViewText>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { Login };
