import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONTS.lg};
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: ${(props) => props.theme.COLORS.white};
`;

export const SubTitle = styled.Text`
  font-family: ${(props) => props.theme.FONTS.sm};
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => props.theme.COLORS.white};
  margin-top: 15px;
`;

export const NextButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  background-color: ${(props) => props.theme.COLORS.white};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
