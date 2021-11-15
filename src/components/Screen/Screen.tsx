import { Theme, useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";

export const Screen: React.FC = ({ children }) => {
  const theme = useTheme();
  const styles = useMemo(() => stylesCb(theme), [theme]);

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const stylesCb = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});
