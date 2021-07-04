import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, ScrollView } from "react-native";
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
  TextError,
} from "./style";
import { api } from "../../services";
import { IDataUserNew } from "./dtos";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = ({ navigation }: any) => {
  const [changeInput, setChangeInput] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    cpf: yup.string().required("Campo Obrigatório"),
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
    if (data.password.trim() === data.confirmpassword.trim()) {
      reset();

      const dataFinal = {
        name: data.name.trim(),
        email: data.email.trim(),
        cpf: data.cpf.trim(),
        password: data.password.trim(),
      };

      api
        .post("/register", dataFinal)
        .then((response) => {
          navigation.navigate("login");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{
          width: "100%",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
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
            <TextError>{errors.name?.message}</TextError>
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
            <Controller
              name="cpf"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ViewInput>
                  <Input
                    onChangeText={onChange}
                    value={value}
                    placeholder="CPF"
                  ></Input>
                </ViewInput>
              )}
            />
            <TextError>{errors.cpf?.message}</TextError>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ViewInput>
                  <Input
                    onChangeText={(text) => {
                      onChange(text);
                      setChangeInput(text);
                    }}
                    value={value}
                    placeholder="Senha"
                  ></Input>
                </ViewInput>
              )}
            />
            <TextError>{errors.password?.message}</TextError>
            <Controller
              name="confirmpassword"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ViewInput>
                  <Input
                    onChangeText={(text) => {
                      onChange(text);
                      setConfirmationPassword(text);
                    }}
                    value={value}
                    placeholder="Confirmar senha"
                  ></Input>
                </ViewInput>
              )}
            />
            <TextError>
              {confirmationPassword !== changeInput
                ? "Senha não compativel"
                : ""}
            </TextError>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { Register };
