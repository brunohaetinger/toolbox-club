import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToolSelectionScreen } from "./screens/ToolSelectionScreen/ToolSelectionScreen";
import { PasswordGeneratorScreen } from "./screens/PasswordGeneratorScreen/PasswordGeneratorScreen";
import { ProfileGeneratorScreen } from "./screens/ProfileGeneratorScreen/ProfileGeneratorScreen";
import Toast from "react-native-toast-message";
import { useThemeStore } from "./store/themeStore";

const Stack = createNativeStackNavigator();

const LightTheme = {
  dark: false,
  colors: {
    primary: '#41228e',
    background: 'rgb(222, 222, 222)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#41228e',
    background: 'rgb(22, 22, 22)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export function App() {
  const {darkTheme} = useThemeStore();
  const headerOptions = {
    headerStyle: {
      backgroundColor: darkTheme ? DarkTheme.colors.background : LightTheme.colors.background,
    },
    headerTintColor: darkTheme ? DarkTheme.colors.text : LightTheme.colors.text,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }


  return (
    <NavigationContainer theme={darkTheme ? DarkTheme : LightTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="ToolSelection"
          component={ToolSelectionScreen}
          options={{ title: "Tool Selection", header: ()=>null }}
        />
        <Stack.Screen
          name="PasswordGeneratorScreen"
          component={PasswordGeneratorScreen}
          options={{ title: "Password Generator", ...headerOptions }}
        />
        <Stack.Screen
          name="ProfileGeneratorScreen"
          component={ProfileGeneratorScreen}
          options={{ title: "Profile Generator", ...headerOptions }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
