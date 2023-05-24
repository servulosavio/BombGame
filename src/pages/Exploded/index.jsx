import React from "react";
import { Container, Logo, SuccessImg, Title } from "./styled";

import logoImg from "../../assets/logoLightRed.png";
import successImg from "../../assets/bomba_explodiu.png";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Exploded() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>Você falhou, a{"\n"}bomba explodiu!!!</Title>
      <SuccessImg source={successImg} style={{ resizeMode: "contain" }} />

      <ButtonComponent
        buttonText="Página Inicial"
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
