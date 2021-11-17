import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { ClubPressable } from "../../components/ClubPressable/ClubPressable";
import { ClubText } from "../../components/ClubText/ClubText";
import { Screen } from "../../components/Screen/Screen";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { getRandomUser } from "../../services/profileService";
import { clubStyles } from "../../styles/ClubStyles";
import { RandomUserProfile } from "../../types/RandomUserProfile.type";

type Props = NativeStackScreenProps<any, any>;

export const ProfileGeneratorScreen: React.FC<Props> = () => {
  const { colors } = useTheme();
  const [profile, setProfile] = useState<RandomUserProfile>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryProfile = async () => {
    try {
      setLoading(true);
      const userProfile = await getRandomUser();
      setProfile(userProfile);
    } catch (err) {
      console.log(err);
      Toast.show({
        type: "error",
        text1: "Try Again",
        text2: "Error getting user, please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    queryProfile();
  }, []);

  return (
    <Screen>
      <ClubText style={clubStyles.title}>Profile Generator</ClubText>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <UserProfile profile={profile} />
        )}
      </View>

      <ClubPressable label="Get New" onPress={queryProfile} disabled={loading} style={{marginTop: 10}}/>
    </Screen>
  );
};
