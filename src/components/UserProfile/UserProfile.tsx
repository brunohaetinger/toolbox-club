import { Theme, useTheme } from "@react-navigation/native";
import React, { FC, useMemo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { clubStyles } from "../../styles/ClubStyles";
import { RandomUserProfile } from "../../types/RandomUserProfile.type";
import { ClubText } from "../ClubText/ClubText";

type Props = {
  profile: RandomUserProfile | undefined,
}

export const UserProfile: FC<Props> = ({ profile }) => {
  const theme = useTheme();
  const styles = useMemo(() => stylesCb(theme), [theme]);

  if (!profile) return null;
  const { name, location, picture, email } = profile;

  return (
    <View style={[styles.profileContainer, theme.dark ? clubStyles.shadowWhite : clubStyles.shadow]}>
      <Image style={styles.profileImage} source={{uri: picture.large}} />
      <ClubText>
        {name.title} {name.last}
      </ClubText>
      <ClubText>{email}</ClubText>
      <ClubText>{location.country}</ClubText>
    </View>
  );
};

const stylesCb = (theme: Theme) => StyleSheet.create({
  profileContainer: {
    padding: 25,
    backgroundColor: theme.colors.background,
    borderRadius: 5,
  },
  profileImage: {
    height: 144,
    width: 144,
    borderRadius: 144/2,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: theme.colors.primary,
    margin: 'auto',
    marginBottom: 30,
  }
})