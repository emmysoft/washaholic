import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const SIgnupButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.signupbtn}>
        <Text style={styles.signuptext}>{children}</Text>
      </View>
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
