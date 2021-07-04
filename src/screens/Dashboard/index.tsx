import React, { useContext, useEffect } from "react";
import {
  Container,
  ViewLogout,
  ButtonStyled,
  TextEmail,
  NameUser,
  Welcome,
  Logout,
  Content,
  ViewImage,
  Photo,
  ViewTextInButton,
  TextButton,
  Icon,
  ViewTextButton,
} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../provider/Auth";
import { api } from "../../services";
import { DataUserContext } from "../../provider/DataUser";

const Dashboard = ({ navigation }: any) => {
  const { auth, setAuth } = useContext(AuthContext);
  const { dataUser, setDataUser } = useContext(DataUserContext);

  const logoutUser = async (): Promise<void> => {
    await AsyncStorage.clear();
    setAuth("");
  };

  useEffect(() => {
    api
      .get("/user/listone", {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((response) => {
        setDataUser(response.data.user);
      })
      .catch((error) => console.log(error));
  }, [auth, dataUser]);

  return (
    <Container>
      <ViewLogout>
        <Logout onPress={logoutUser}>Logout</Logout>
        <Icon onPress={logoutUser} name="arrow-left" />
      </ViewLogout>
      <Content>
        <ViewTextInButton>
          <ViewImage>
            <Photo
              source={{
                uri: "https://trello-attachments.s3.amazonaws.com/60aecb5f3779ba595c724f03/60b0ff9d697d013f498228ed/9a790459ff7ec332bbec780dc02a11a3/image.png",
              }}
            ></Photo>
          </ViewImage>
          <ViewTextButton>
            <Welcome>
              Bem vindo, <NameUser>{dataUser.name}</NameUser>
            </Welcome>
            <TextEmail>{dataUser.email}</TextEmail>
            <ButtonStyled>
              <TextButton onPress={() => navigation.navigate("updateUser")}>
                Editar perfil
              </TextButton>
            </ButtonStyled>
          </ViewTextButton>
        </ViewTextInButton>
      </Content>
    </Container>
  );
};

export { Dashboard };
