import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { Switch, View, StyleSheet } from "react-native";
import { ClubText } from "../ClubText/ClubText";

type Props = {
  label: string;
  value: boolean;
  onToggle: (newValue: boolean) => void;
}

export const PasswordConfigSwitch: FC<Props> = ({ label, value, onToggle }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ClubText>{label}</ClubText>
      <Switch
        trackColor={{ false: "#767577", true: `${colors.primary}55` }}
        thumbColor={value ? `${colors.primary}` : "#f4f3f4"}
        // @ts-ignore - For web version
        activeThumbColor={colors.primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggle}
        value={value}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 20,
  },
});
