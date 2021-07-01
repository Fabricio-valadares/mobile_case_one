import React from "react";
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

const Dashboard = ({ navigation }: any) => {
  return (
    <Container>
      <ViewLogout>
        <Logout onPress={() => navigation.navigate("login")}>Logout</Logout>
        <Icon onPress={() => navigation.navigate("login")} name="arrow-left" />
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
              Bem vindo, <NameUser>nome</NameUser>
            </Welcome>
            <TextEmail>exemplo@exemplo.com.br</TextEmail>
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
