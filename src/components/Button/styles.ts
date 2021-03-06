import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ButtonProps {
  type: "light" | "dark" | "white" | undefined;
}

export const Button = styled(RectButton)<ButtonProps>`
  border-radius: 8px;
  background-color: ${(props) => {
    if (props.type === "light") {
      return props.theme.COLORS.primary_300;
    }
    if (props.type === "dark") {
      return props.theme.COLORS.primary_500;
    }
    if (props.type === "white") {
      return props.theme.COLORS.white;
    }

    return props.theme.COLORS.primary_500;
  }};
  height: 56px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: ${(props) => props.theme.FONTS.md};
  font-size: 16px;
  text-align: center;
  color: ${(props) =>
    props.type === "white" ? props.theme.COLORS.primary_700 : "#fff"};
`;
