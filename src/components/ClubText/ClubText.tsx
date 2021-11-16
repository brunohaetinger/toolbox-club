import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { Text } from "react-native";
import { TextProps } from "react-native";

export const ClubText: FC<TextProps> = ({children, ...props}) => {
  const { colors } = useTheme();

  return (
    <Text {...props} style={[{color: colors.text}, props.style]}>
      {children}
    </Text>
  )
}