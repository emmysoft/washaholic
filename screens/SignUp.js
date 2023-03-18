import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import SIgnupButton from "../components/SIgnupButton";

const SignUp = () => {
  return (
    <View style={styles.signupPage}>
      <Image
        source={require("../assets/washaholic.png")}
        width={200}
        height={180}
        alt="logo"
      />
      <View style={styles.signupContainer}>
        <CustomInput />
        <CustomInput />
        <SIgnupButton/>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signupPage: {
    backgroundColor: "#E5E5E5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  signupContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
  }
});
