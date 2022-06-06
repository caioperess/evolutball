import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const LeagueCard = styled(RectButton)`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 100px;
  background-color: ${(props) => props.theme.COLORS.white};
  border-radius: 12px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.FONTS.sm};
  color: ${(props) => props.theme.COLORS.white};
  font-weight: 100;
  font-size: 30px;
`;

export const LeagueCardText = styled.Text`
  color: ${(props) => props.theme.COLORS.primary_500};
  font-size: 14px;
  font-family: ${(props) => props.theme.FONTS.sm};
  text-align: center;
`;

export const TextLeague = styled.Text`
  color: ${(props) => props.theme.COLORS.white};
  font-size: 25px;
  font-family: ${(props) => props.theme.FONTS.lg};
  text-align: left;
  margin-bottom: 15px;
`;

 
 