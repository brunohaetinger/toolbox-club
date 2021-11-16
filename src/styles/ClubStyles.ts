import { StyleSheet } from "react-native";

export const clubStyles = StyleSheet.create({
  shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  shadowWhite: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'white',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  title: {
    color: '#41228e',
    fontWeight: "700",
    fontSize: 30,
  }
});