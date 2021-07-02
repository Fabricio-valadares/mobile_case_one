import React, { useEffect, useContext } from "react";
import { KeyboardAvoidingView, Platform, Text } from "react-native";
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
import { AuthContext } from "../../provider/Auth";
import { api } from "../../services";
import { IDataUserNew } from "./dtos";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = ({ navigation }: any) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compativel")
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

  const handleSubmitForm = (data: IDataUserNew) => {
    reset();

    console.log("Registe oba oba !");

    const dataFinal = {
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };

    api
      .post("/register", dataFinal)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ width: "100%", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Title>CADASTRE-SE</Title>
        <Form>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ViewInput>
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Name"
                ></Input>
              </ViewInput>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ViewInput>
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="E-mail/CPF"
                ></Input>
              </ViewInput>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ViewInput>
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Senha"
                ></Input>
              </ViewInput>
            )}
          />
          <Controller
            name="confirmpassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ViewInput>
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Confirmar senha"
                ></Input>
              </ViewInput>
            )}
          />
          <ButtonStyles
            onPress={handleSubmit(handleSubmitForm)}
            activeOpacity={0.9}
          >
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
