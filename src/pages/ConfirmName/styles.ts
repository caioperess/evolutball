import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.primary_700};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONTS.lg};
  color: #fff;
  font-size: 32px;
  margin-top: 5px;
  padding: 0 10px;
  text-align: center;
`;
