import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, Switch, View, StyleSheet } from "react-native";

type Props = {
  label: string;
  value: boolean;
  onToggle: (newValue: boolean) => void;
};

export const PasswordConfigSwitch: FC<Props> = ({ label, value, onToggle }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
});