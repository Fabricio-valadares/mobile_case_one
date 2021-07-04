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
  TextError,
} from "./style";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IDataUserForgot } from "./dtos";
import { api } from "../../services";

const Forgot = ({ navigation }: any) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Não e um formato de e-mail")
      .required("Campo Obrigatório"),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data: IDataUserForgot) => {
    reset();

    const dataFinal = {
      email: data.email.trim(),
    };

    api
      .post("/user/forgot", dataFinal)
      .then((response) => {
        navigation.navigate("login");
      })
      .catch((error) => console.log("Muitos Ovos", error));
  };

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
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ViewInput>
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="E-mail"
                ></Input>
              </ViewInput>
            )}
          />
          <TextError>{errors.email?.message}</TextError>
          <ButtonStyles
            onPress={handleSubmit(handleSubmitForm)}
            activeOpacity={0.9}
          >
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
