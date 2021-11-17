import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { Pressable, StyleSheet, ButtonProps, PressableProps } from "react-native";
import { clubStyles } from "../../styles/ClubStyles";
import { ClubText } from "../ClubText/ClubText";

type Props = {
  label: string,
} & PressableProps;

export const ClubPressable: FC<Props> = ({onPress, label, disabled, children, style, ...props}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        style,
        styles.button,
        {
          backgroundColor: disabled ? `${colors.primary}22` : (pressed ? `${colors.primary}88` : colors.primary),
        },
        !disabled ? clubStyles.shadow : null,
      ]}
      onPress={!disabled ? onPress : undefined}
    >
      { children ? children : <ClubText style={styles.buttonText}>{label}</ClubText> }
    </Pressable>
  );
};


const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  buttonText: {
    color: "#fff",
  },
});