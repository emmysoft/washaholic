import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { useState } from "react";
// import { RxAvatar } from "react-icons/rx";
// import { GiPadlock } from "react-icons/gi";

import CustomInput from "../components/CustomInput";
import LoginButton from "../components/LoginButton";
import { ScrollView } from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.loginHeader}>
        <Image
          source={require("../assets/washaholic.png")}
          width={200}
          height={180}
          alt="logo"
        />
        <View style={styles.loginContainer}>
          <Text style={styles.loginhead}>Sign in</Text>
          <View style={styles.userInput}>
            {/* <RxAvatar /> */}
            <CustomInput
              placeholder="Email"
              value={username}
              setValue={setUsername}
            />
          </View>
          <View style={styles.passwordInput}>
            {/* <GiPadlock /> */}
            <CustomInput
              placeholder="Password"
              value={password}
              setValue={setPassword}
            />
          </View>
          <View style={styles.loginOptions}>
            <View style={styles.remember}>
              <TextInput />
              <Text>Remember Me</Text>
            </View>
            <View>
              <Text>Forgot Password?</Text>
            </View>
          </View>
          <LoginButton>Sign in</LoginButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginHeader: {
    backgroundColor: "#e5e5e5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  loginContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
  },
  loginhead: {
    // marginHorizontal: 60,
    marginVertical: 20,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 30,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  remember: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
});
