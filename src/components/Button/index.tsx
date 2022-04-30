import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, ButtonText } from "./styles";

interface CustomButtonProps extends RectButtonProps {
  type?: "light" | "dark" | "white";
  text: string;
}

export default function CustomButton({
  type,
  text,
  ...rest
}: CustomButtonProps) {
  return (
    <Button type={type} {...rest}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
