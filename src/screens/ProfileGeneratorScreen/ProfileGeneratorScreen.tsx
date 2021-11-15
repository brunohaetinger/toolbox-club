import React from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, TextInput, View, Text } from "react-native"
import { Screen } from "../../components/Screen/Screen";

type Props = NativeStackScreenProps<any, any>;

export const ProfileGeneratorScreen: React.FC<Props> = () => {

  return (
    <Screen>
      <Text>Profile Generator</Text>
      <View>
       
      </View>
    </Screen>
  )
}