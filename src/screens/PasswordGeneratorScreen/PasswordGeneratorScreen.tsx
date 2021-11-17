import Clipboard from "@react-native-clipboard/clipboard";
import { Theme, useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { ClubPressable } from "../../components/ClubPressable/ClubPressable";
import { ClubText } from "../../components/ClubText/ClubText";
import { PasswordConfigSwitch } from "../../components/PasswordConfigSwitch/PasswordConfigSwitch";
import { Screen } from "../../components/Screen/Screen";
import { clubStyles } from "../../styles/ClubStyles";
import { PassConfig } from "../../types/PassConfig.type";
import { generatePassword } from "../../utils/GeneratePassword";

type Props = NativeStackScreenProps<any, any>;

const initialPassConfig = {
  passLength: 16,
  includeSymbols: true, // ( e.g. @#$% )
  includeNumbers: true, // ( e.g. 123456 )
  includeLowercase: true, // ( e.g. asdfgh )
  includeUppercase: true, // ( e.g. ABCDEFGH )
};

export const PasswordGeneratorScreen: React.FC<Props> = () => {
  const { dark, colors } = useTheme();
  const [passConfig, setPassConfig] = useState<PassConfig>(initialPassConfig);
  const [passwordOutput, setPasswordOutput] = useState<string>("");

  const styles = useMemo(() => stylesCb(dark), [dark]);

  const copyToClipboard = () => {
    Clipboard.setString(passwordOutput);
    Toast.show({
      type: 'success',
      text1: 'Copied!',
      text2: 'Password copied to clipboard 👋'
    });
  };

  const toggleIncludeConfig = (configName: string) => (newValue: boolean) => {
    setPassConfig((config) => ({
      ...config,
      [configName]: newValue,
    }));
  };

  const handlePassLengthChange = (newValue: string) => {
    const newLength = Number(newValue.replace(/[^0-9]/g, ""));
    if (!Number.isInteger(newLength)) {
      return;
    }

    setPassConfig((config) => ({
      ...config,
      passLength: newLength,
    }));
  };

  const handleGeneratePassword = () => {
    if (passConfig.passLength < 6) {
      Alert.alert("Strong passwords should be at least 6 characters long.");
    }
    const pass = generatePassword(passConfig);
    setPasswordOutput(pass);
  };

  const hasOneRuleAsTrue = () => {
    return (
      passConfig.includeSymbols ||
      passConfig.includeNumbers ||
      passConfig.includeLowercase ||
      passConfig.includeUppercase
    );
  };

  return (
    <Screen>
      <ClubText style={clubStyles.title}>Password Generator</ClubText>
      <View>
        <View style={styles.outputContainer}>
          <ClubText 
            style={styles.passwordOutput}
            numberOfLines={1}
          >
            {passwordOutput}
          </ClubText>
          <ClubPressable
            onPress={copyToClipboard}
            label="Copy"
            disabled={!passwordOutput}
          />
        </View>

        <View style={[styles.inputsContainer, dark ? clubStyles.shadowWhite : clubStyles.shadow]}>
          <View style={styles.passwordLengthContainer}>
            <ClubText>Password Length</ClubText>
            <TextInput
              style={[styles.passLengthInput, {color: colors.text} ]}
              value={String(passConfig.passLength)}
              onChangeText={handlePassLengthChange}
            />
          </View>
          <PasswordConfigSwitch
            label="Include Symbols"
            value={passConfig.includeSymbols}
            onToggle={toggleIncludeConfig("includeSymbols")}
          />
          <PasswordConfigSwitch
            label="Include Numbers"
            value={passConfig.includeNumbers}
            onToggle={toggleIncludeConfig("includeNumbers")}
          />
          <PasswordConfigSwitch
            label="Include Lowercase"
            value={passConfig.includeLowercase}
            onToggle={toggleIncludeConfig("includeLowercase")}
          />
          <PasswordConfigSwitch
            label="Include Uppercase"
            value={passConfig.includeUppercase}
            onToggle={toggleIncludeConfig("includeUppercase")}
          />
        </View>

        <ClubPressable
          onPress={handleGeneratePassword}
          label="Generate"
          disabled={!hasOneRuleAsTrue()}
        />
      </View>
    </Screen>
  );
};


const stylesCb = (dark: boolean) => StyleSheet.create({
  inputsContainer: {
    backgroundColor: dark ? "rgb(70, 70, 70)" : "#fff",
    padding: 20,
    borderRadius: 5,
    margin: 10,
  },
  outputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    width: 280,
    alignSelf: 'center',
    backgroundColor: dark ? "rgb(70, 70, 70)" : "#fff",
  },
  passwordLengthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 36,
    marginBottom: 20,
  },
  passwordOutput: {
    maxHeight: 36,
    padding: 10,
  },
  passLengthInput: {
    width: 60,
    textAlign: 'right',
  }
});
