import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { Screen } from "../../components/Screen/Screen";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { RandomUserProfile } from "../../types/RandomUserProfile.type";

type Props = NativeStackScreenProps<any, any>;

export const ProfileGeneratorScreen: React.FC<Props> = () => {
  const { colors } = useTheme();
  const [profile, setProfile] = useState<RandomUserProfile>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const queryProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://randomuser.me/api/`);
        if (response.error) {
          throw response.error;
        }
        const json = await response.json();
        setProfile(json.results[0]);
      } catch (err) {
        Toast.show({
          type: "error",
          text1: "Try Again",
          text2: "Error getting user, please try again.",
        });
      } finally {
        setLoading(false);
      }
    };
    queryProfile();
  }, []);

  return (
    <Screen>
      <Text>Profile Generator</Text>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <UserProfile profile={profile} />
        )}
      </View>
    </Screen>
  );
};
