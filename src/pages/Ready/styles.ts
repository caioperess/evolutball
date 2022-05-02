import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.primary_700};
`;

export const Emoji = styled.Text`
  font-family: ${(props) => props.theme.FONTS.lg};
  color: #fff;
  font-size: 60px;
  margin-top: 5px;
  text-align: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONTS.lg};
  color: #fff;
  font-size: 32px;
  margin-top: 5px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.FONTS.sm};
  color: #fff;
  font-size: 17px;
  margin-top: 10px;
  text-align: center;
`;
