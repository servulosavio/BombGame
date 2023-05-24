import React from "react";
import { Container, Logo, SuccessImg, Title } from "./styles";

import logoImg from "../../assets/logoDark.png";
import successImg from "../../assets/bomba_cortada_matrix.png";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Disarmed() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>Parabéns!!!{"\n"}Você desarmou </Title>
      <SuccessImg source={successImg} style={{ resizeMode: "contain" }} />

      <ButtonComponent
        buttonText="Página Inicial"
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
