import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface OptionCardProps {
  active: boolean
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.COLORS.primary_700};
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.FONTS.sm};
  color: ${(props) => props.theme.COLORS.text_dark};
  font-weight: 300;
  font-size: 32px;
`;

export const HeaderSubTitle = styled.Text`
  font-family: ${(props) => props.theme.FONTS.lg};
  color: ${(props) => props.theme.COLORS.white};
  font-size: 32px;
`;

export const HeaderButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  background-color: ${(props) => props.theme.COLORS.white};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentTitle = styled.Text`
  color: ${(props) => props.theme.COLORS.white};
  font-size: 17px;
  font-family: ${(props) => props.theme.FONTS.sm};
  text-align: left;
  width: 100%;
`;

export const OptionCard = styled(RectButton)<OptionCardProps>`
  width: 110px;
  height: 60px;
  background-color: ${(props) => props.active ? props.theme.COLORS.primary_300 : props.theme.COLORS.white};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  flex-direction: row;

  padding: 10px;
`;

export const LeagueCard = styled(RectButton)`
  width: 160px;
  height: 200px;
  background-color: ${(props) => props.theme.COLORS.white};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin: 10px 6px;
  padding: 10px;
`;

export const LeagueCardText = styled.Text`
  color: ${(props) => props.theme.COLORS.text_light};
  font-size: 14px;
  font-family: ${(props) => props.theme.FONTS.md};
  text-align: center;

  margin-top: 10px;
`;
