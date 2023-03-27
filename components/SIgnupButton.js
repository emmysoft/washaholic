import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const SIgnupButton = ({ children, onPress, disabled }) => {
  return (
    <Pressable onPress={onPress} style={styles.signupbtn} disabled={disabled}>
      <Text style={styles.signuptext}>{children}</Text>
    </Pressable>
  );
};

export default SIgnupButton;

const styles = StyleSheet.create({
  signupbtn: {
    width: 300,
    height: 55,
    backgroundColor: "#E5E5E5",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#054a98",
  },
  signuptext: {
    color: "#04509c",
    fontWeight: 500,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
