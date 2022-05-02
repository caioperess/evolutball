import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.primary_700};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.FONTS.sm};
  color: #fff;
  font-size: 17px;
  line-height: 25px;
  margin-top: 20px;
  text-align: center;
`;