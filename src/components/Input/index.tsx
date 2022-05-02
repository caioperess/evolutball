import React, { forwardRef, useCallback, useRef, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import theme from "../../theme";

interface InputProps extends TextInputProps {
  isFilled?: boolean;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { isFilled = false, ...rest },
  ref
) => {
  const inputRef = useRef<TextInputProps>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <TextInput
      ref={inputRef}
      style={{
        borderBottomWidth: 1,
        borderColor: isFocused || isFilled ? "#fff" : "#CFCFCF",
        width: "100%",
        padding: 10,
        textAlign: "center",
        color: "#fff",
        marginBottom: 15,
      }}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      placeholderTextColor={theme.COLORS.text_light}
      {...rest}
    />
  );
};

export default forwardRef(Input);
