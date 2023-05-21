import React from "react";
import { Container, Logo, SubTitle, Title, Rules } from "./styles.js";
import ButtonComponent from "../../components/Buttons/index.jsx";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export default function Start() {
  const navigation = useNavigation();

  const handleNavToPlayAlone = () => {
    Alert.alert("Teste de Play Alone");
  };

  const handleNavToPlayTogether = () => {
    Alert.alert("Teste de Play together");
  };

  const handleNavToRules = () => {
    navigation.navigate("Rules");
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
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
  );
}
