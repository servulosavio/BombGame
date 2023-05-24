import React from "react";
import { BombMessage, Container, ScrollContainer, Title } from "./styled";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import InputPassword from "../../components/PlayTogether/InputPassword";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function PlayTogether() {
  const navigation = useNavigation();

  function handleStartGame() {
    Alert.alert("Jogo iniciado");
  }

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer />
        <BombMessage>Mensagem de erro temporária</BombMessage>
        <TipInput />
        <InputPassword />

        <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
        <ButtonComponent
          buttonText="Página Inicial"
          handlePress={handleNavToStart}
        />
      </Container>
    </ScrollContainer>
  );
}
