import React, { useContext, useState } from "react";
import { KeyboardAvoidingView, Platform, Alert } from "react-native";
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
import { AuthContext } from "../../provider/Auth";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IDataForm } from "./dtos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../services";

const Login = ({ navigation }: any) => {
  const { setAuth } = useContext(AuthContext);

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data: IDataForm) => {
    reset();

    api
      .post("/login", data)
      .then((response) => {
        AsyncStorage.setItem(
          "@mind/mobile",
          JSON.stringify(response.data.token)
        );
        setAuth(response.data.token);
      })
      .catch((error) => {
        console.log("error", error);
        Alert.alert("E-mail/CPF inválido");
      });
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ width: "100%", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Title>ENTRAR</Title>
        <SubTitle>O seu passaporte para o futuro.</SubTitle>

        <Form>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="E-mail/CPF"
                ></Input>
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Senha"
                ></Input>
              </>
            )}
          />
          <ButtonStyles
            onPress={handleSubmit(handleSubmitForm)}
            activeOpacity={0.9}
          >
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
