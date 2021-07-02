import React, { useContext } from "react";
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

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    password: yup.string(),
    confirmationPassword: yup
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
    reset();

    const { sub } = jwt_decode<IDataId>(auth);

    const dataFinal = {
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };

    api
      .put(`/user/update/${sub}`, dataFinal, {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((response) => {
        setDataUser(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ width: "100%", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
            <TextButton>CONFIRMAR</TextButton>
          </ButtonStyles>
        </Form>
        <ViewText>
          <TextFinal onPress={() => navigation.navigate("dashboard")}>
            Voltar
          </TextFinal>
        </ViewText>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { UpdateUser };
