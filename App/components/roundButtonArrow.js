import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function RoundButtonWithArrowIcon({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign name="arrowright" size={24} color="#1994fe" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: -375,
    marginBottom: 260,
    marginLeft: 60,
  },
});
