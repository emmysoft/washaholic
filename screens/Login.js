import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import CustomInput from "../components/CustomInput";
import LoginButton from "../components/LoginButton";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.loginHeader}>
          <Image
            source={require("../assets/washaholic.png")}
            style={styles.loginImage}
            alt="logo"
          />
          <View style={styles.loginContainer}>
            <Text style={styles.loginhead}>Sign In</Text>
            <View style={styles.userInput}>
              <CustomInput
                placeholder="Email"
                value={username}
                setValue={setUsername}
              />
            </View>
            <View style={styles.passwordInput}>
              {/* <IoPersonOutline/> */}
              <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.loginOptions}>
              <View style={styles.remember}>
                {/* <TextInput /> */}
                <Text style={styles.logText}>Remember Me</Text>
              </View>
              <View>
                <Text
                  style={styles.forgot}
                  onPress={() => navigation.navigate("Password")}
                >
                  Forgot Password?
                </Text>
              </View>
            </View>
            <LoginButton onPress={() => navigation.navigate("Home")}>
              Sign in
            </LoginButton>
            <View style={styles.options}>
              <Text style={styles.optionText}>
                New on our platform?
                <Text
                  style={styles.optionLink}
                  onPress={() => navigation.navigate("Signup")}
                >
                  Create an account
                </Text>
              </Text>
              <Ionicons name="finger-print" size={50} color="#054a98" />
              <Text style={styles.touch}>Use Touch ID</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  loginHeader: {
    backgroundColor: "#e5e5e5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  loginImage: {
    width: 210,
    height: 180,
    marginHorizontal: 80,
    marginVertical: 70,
  },
  loginContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    padding: 10,
  },
  loginhead: {
    marginVertical: 20,
    fontStyle: "normal",
    fontWeight: 500,
    fontFamily: "roboto",
    fontSize: 22,
    color: "#054a98",
    textAlign: "center",
  },
  userInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  passwordInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  loginOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 15,
  },
  remember: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  logText: {
    color: "#04509c",
  },
  forgot: {
    fontFamily: "roboto",
    color: "#04509c",
    fontWeight: 700,
    fontSize: 14,
    width: 130,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    gap: 10,
  },
  optionText: {
    fontSize: 14,
    fontWeight: 700,
    color: "#665d5d",
    width: 300,
    textAlign: "center",
    padding: 10,
  },
  optionLink: {
    color: "#054a98",
  },
  touch: {
    fontWeight: 500,
    fontSize: 20,
    color: "#443d3d",
    fontFamily: "roboto-italic"
  },
});
