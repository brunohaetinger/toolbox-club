import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ClubPressable } from "../../components/ClubPressable/ClubPressable";
import { Screen } from "../../components/Screen/Screen";
import { ThemeSwitch } from "../../components/ThemeSwitch/ThemeSwitch";
import { clubStyles } from "../../styles/ClubStyles";

const Logo = require("../../../assets/logo.png");

type Props = NativeStackScreenProps<any, any>;

export const ToolSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const navigateTo = (nextScreen: string) => () => {
    navigation.navigate(nextScreen);
  };

  return (
    <Screen>
      <Image source={Logo} style={[styles.logo, clubStyles.shadow]} />
      <View style={{ width: 200, gap: 20 }}>
        <ClubPressable
          label="Password Generator"
          onPress={navigateTo("PasswordGeneratorScreen")}
        />
        <ClubPressable
          label="Profile Generator"
          onPress={navigateTo("ProfileGeneratorScreen")}
        />
      </View>
      <ThemeSwitch style={styles.themeSwitch} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  logo: {
    width: 266,
    height: 140,
    marginBottom: 100,
    borderRadius: 10,
  },
  themeSwitch: {
    position: 'absolute',
    top: 20,
    right: 20,
  }
});
