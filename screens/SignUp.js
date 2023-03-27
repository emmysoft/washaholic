import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import CustomInput from "../components/CustomInput";
import SIgnupButton from "../components/SIgnupButton";

const SignUp = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ScrollView style={styles.scroller}>
        <View style={styles.signupPage}>
          <Image
            source={require("../assets/washaholic.png")}
            width={200}
            height={180}
            alt="logo"
            style={styles.signupImage}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signuphead}>Sign Up</Text>
            <View style={styles.signupInput}>
              <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUserName}
              />
              <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
              />
              <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
              />
            </View>
            <SIgnupButton onPress={() => navigation.navigate("Profile")}>
              Sign Up
            </SIgnupButton>
          </View>
          {/* <View>
        <View style={styles.signupoptions}>
          <View></View>
          <Text style={styles.option}>Or</Text>
          <View></View>
        </View>
        <View style={styles.social}>
          <FcGoogle />
          <FaFacebookF />
        </View>
        <Text>Already have an account? Login</Text>
      </View> */}
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  },
  signupPage: {
    backgroundColor: "#E5E5E5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    padding: 10,
  },
  signuphead: {
    marginVertical: 20,
    fontSize: 30,
    fontWeight: 600,
    color: "#054a98",
    textAlign: "center",
  },
  signupImage: {
    width: 200,
    height: 180,
    marginHorizontal: 50,
    marginVertical: 50,
  },
  signupInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  signupoptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
