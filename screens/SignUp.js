import { Image, StyleSheet, Text, View, ScrollView, Alert, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import CustomInput from "../components/CustomInput";
import LoginButton from "../components/LoginButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseconfig";

const SignUp = ({ navigation }) => {

  const auth = FIREBASE_AUTH;
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const handleHide = () => setShowPassword(!showPassword);

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
      setLoading(true);
      Alert.alert("Success", "Account created successfully");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
      setLoading(false);
    }
  }

  return (
    <>
      <ScrollView style={styles.scroller}>
        <View style={styles.signupPage}>
          <Image
            source={require("../assets/washaholic.png")}
            width={210}
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
                onChangeText={(text) => setUserName(text)}
              />
              <CustomInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <CustomInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={showPassword}
              />
              <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#054A98" onPress={handleHide} style={{ position: "absolute", right: 30, top: 160 }} />
            </View>
            <View style={styles.butn}>
              {loading ?
                <LoginButton
                  style={styles.button}
                >
                  <ActivityIndicator color="#fff" size="large"/>
                </LoginButton>
                :
                <LoginButton
                  onPress={register}
                  disabled={false}
                  style={styles.button}
                >
                  Sign Up
                </LoginButton>
              }
            </View>
            <View style={styles.options}>
              <View style={styles.signupoptions}>
                <View style={styles.span}></View>
                <Text style={styles.option}>Or</Text>
                <View style={styles.span}></View>
              </View>
              <View style={styles.social}>
                <AntDesign name="google" size={24} color="#ff0000" />
                <FontAwesome5 name="facebook-f" size={24} color="#1976D2" />
              </View>
              <Text style={styles.signText}>
                Already have an account?
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={styles.lastLink}
                >
                  Login
                </Text>
              </Text>
            </View>
          </View>
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
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
    marginHorizontal: 80,
    marginVertical: 70,
  },
  button: {
    justifyContent: "center",
    width: 300,
    height: 55,
    backgroundColor: "#054a98",
    borderRadius: 30,
    marginHorizontal: 40,
    cursor: "pointer",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginTop: 30,
    padding: 30,
  },
  signupInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: 10,
  },
  butn: {
    padding: 10,
  },
  signupoptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 32,
  },
  span: {
    height: 0,
    width: 150,
    borderWidth: 0.5,
    borderColor: "0.718551px solid #054A98",
  },
  option: {
    width: 23,
    fontWeight: 400,
    fontSize: 14,
    color: "#665D5D",
  },
  social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 50,
  },
  signText: {
    width: 250,
    fontWeight: 400,
    fontSize: 14,
    color: "#665d5d",
    textAlign: "center",
  },
  lastLink: {
    color: "#04509C",
    fontWeight: 500,
    fontSize: 15,
  },
});
