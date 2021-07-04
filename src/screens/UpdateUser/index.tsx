import React, { useContext, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IDataUserUpdate, IDataId } from "./dtos";
import { api } from "../../services";
import { AuthContext } from "../../provider/Auth";
import { DataUserContext } from "../../provider/DataUser";
import jwt_decode from "jwt-decode";

const UpdateUser = ({ navigation }: any) => {
  const { auth } = useContext(AuthContext);
  const { setDataUser } = useContext(DataUserContext);

  const [changeInput, setChangeInput] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    cpf: yup.string(),
    password: yup.string(),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compativel"),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data: IDataUserUpdate) => {
    if (data.password === undefined) {
      data.password = "";
    }

    if (data.confirmpassword === undefined) {
      data.confirmpassword = "";
    }

    if (data.password.trim() === data.confirmpassword.trim()) {
      reset();

      const { sub } = jwt_decode<IDataId>(auth);

      const dataFinal = {
        name: data.name === undefined ? data.name : data.name.trim(),
        email: data.email === undefined ? data.email : data.email.trim(),
        cpf: data.cpf === undefined ? data.cpf : data.cpf.trim(),
        password:
          data.password === undefined ? data.password : data.password.trim(),
      };

      api
        .put(`/user/update/${sub}`, dataFinal, {
          headers: { Authorization: `Bearer ${auth}` },
        })
        .then((response) => {
          navigation.navigate("dashboard");
          console.log("response");

          setDataUser(response.data);
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>EDITAR</Title>
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
              <TextButton>CONFIRMAR</TextButton>
            </ButtonStyles>
          </Form>
          <ViewText>
            <TextFinal onPress={() => navigation.navigate("dashboard")}>
              Voltar
            </TextFinal>
          </ViewText>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { UpdateUser };
