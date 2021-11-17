import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { Switch, View, StyleSheet, StyleProp } from "react-native";
import { useThemeStore } from "../../store/themeStore";
import { ClubText } from "../ClubText/ClubText";

type Props = {
  style: StyleProp<any>
}

export const ThemeSwitch: FC<Props> = ({ style }) => {
  const { colors } = useTheme();
  const { darkTheme, toggleTheme } = useThemeStore();

  return (
    <View style={[styles.container, style]}>
      <ClubText style={{marginRight: 10}}>Dark Theme</ClubText>
      <Switch
        trackColor={{ false: "#767577", true: `${colors.primary}55` }}
        thumbColor={darkTheme ? `${colors.primary}` : "#f4f3f4"}
        // @ts-ignore - For web version
        activeThumbColor={colors.primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={darkTheme}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
});
