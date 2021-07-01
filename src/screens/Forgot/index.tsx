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
  ViewTitle,
} from "./style";

const Forgot = ({ navigation }: any) => {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ width: "100%", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ViewTitle>
          <Title>ESQUECI MINHA SENHA</Title>
        </ViewTitle>

        <Form>
          <ViewInput>
            <Input placeholder="E-mail"></Input>
          </ViewInput>
          <ButtonStyles activeOpacity={0.9}>
            <TextButton>ENVIAR CÓDIGO</TextButton>
          </ButtonStyles>
        </Form>
        <ViewText>
          <TextFinal>
            Não possui uma conta?
            <TextRegister onPress={() => navigation.navigate("register")}>
              Registrar-se
            </TextRegister>
          </TextFinal>
        </ViewText>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { Forgot };
