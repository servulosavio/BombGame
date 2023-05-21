import { styled } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";


export const Container = styled.View`
    flex: 1;
    padding: 0px 40px;
    padding-top: ${getStatusBarHeight() + RFValue(20)}px;
    background-color: #131313;
`

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(30)}px;
    margin-bottom: ${RFValue(20)}px;
    color: white;
`

export const ScrollTextRules = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: sans-serif;
    margin-left: ${RFValue(10)}px;
    color: white;
    font-weight: bold;
`

export const Paragraph = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: sans-serif;
    margin-left: ${RFValue(10)}px;
    margin-top: ${RFValue(15)}px;
    color: #bbb;
    text-align: justify;
`

export const NumberParagraph = styled.Text`
font-weight: bold;
`
