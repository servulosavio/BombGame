import React from "react";
import { Container, Logo, SubTitle, Title, Rules } from "./styles.js";
import ButtonComponent from "../../components/Buttons/index.jsx";

export default function Start() {
  const handleNavToPlayAlone = () => {
    console.log("Teste de Play Alone");
  };

  const handleNavToPlayTogether = () => {
    alert("Teste de Play together");
  };

  const handleNavToRoles = () => {
    console.log("Teste de Roves");
  };

  return (
    <Container>
      <Logo
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"}Bomb Game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent
        buttonText={"Jogar Solo"}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponent
        buttonText={"Jogar Em Dupla"}
        handlePress={handleNavToPlayTogether}
      />
      <Rules onPress={handleNavToRoles}>Ver as regras do jogo</Rules>
    </Container>
  );
}
