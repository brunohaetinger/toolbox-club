import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, Pressable, StyleSheet, ButtonProps, PressableProps } from "react-native";
import { clubStyles } from "../../styles/ClubStyles";

type Props = {
  label: string,
} & PressableProps;

export const ClubPressable: FC<Props> = ({onPress, label, disabled, children, ...props}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled ? `${colors.primary}22` : (pressed ? `${colors.primary}88` : colors.primary),
        },
        !disabled ? clubStyles.shadow : null,
      ]}
      onPress={!disabled ? onPress : undefined}
      {...props}
    >
      { children ? children : <Text style={styles.buttonText}>{label}</Text> }
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