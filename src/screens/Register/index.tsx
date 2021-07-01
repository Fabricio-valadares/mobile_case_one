import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Container,
  ViewInput,
  Title,
  TextRegister,
  TextButton,
  Form,
  Input,
  ButtonStyles,
  ViewText,
  TextFinal,
} from "./style";

const Register = ({ navigation }: any) => {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ width: "100%", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Title>CADASTRE-SE</Title>
        <Form>
          <ViewInput>
            <Input placeholder="Name"></Input>
          </ViewInput>
          <ViewInput>
            <Input placeholder="E-mail/CPF"></Input>
          </ViewInput>
          <ViewInput>
            <Input placeholder="Senha"></Input>
          </ViewInput>
          <ViewInput>
            <Input placeholder="Confirmar senha"></Input>
          </ViewInput>
          <ButtonStyles activeOpacity={0.9}>
            <TextButton>CADASTRAR</TextButton>
          </ButtonStyles>
        </Form>
        <ViewText>
          <TextFinal>
            Já possui uma conta?
            <TextRegister onPress={() => navigation.navigate("login")}>
              Entrar
            </TextRegister>
          </TextFinal>
        </ViewText>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { Register };
