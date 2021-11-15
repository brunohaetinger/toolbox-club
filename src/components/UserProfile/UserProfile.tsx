import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RandomUserProfile } from "../../types/RandomUserProfile.type";

type Props = {
  profile: RandomUserProfile | undefined,
}

export const UserProfile: FC<Props> = ({ profile }) => {
  if (!profile) return null;
  const { name, location, picture, email } = profile;

  return (
    <View>
      <Image style={styles.profileImage} source={{uri: picture.large}} />
      <Text>
        {name.title} {name.last}
      </Text>
      <Text>{email}</Text>
      <Text>{location.country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 185,
    width: 185,
    borderRadius: 185/2,
    margin: 'auto',
  }
})