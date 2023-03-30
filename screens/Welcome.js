import { Image, StyleSheet, View } from "react-native";

import LoginButton from "../components/LoginButton";
import SIgnupButton from "../components/SIgnupButton";

const Welcome = ({ navigation }) => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.layout}>
          <Image
            source={require("../assets/washaholic.png")}
            width={300}
            height={200}
            alt="logo"
          />
          <View style={styles.buttonlayout}>
            <LoginButton onPress={() => navigation.navigate("Login")}>
              Sign in
            </LoginButton>
            <SIgnupButton onPress={() => navigation.navigate("Signup")}>
              Sign up
            </SIgnupButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    height: "100%",
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  buttonlayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    padding: 10,
  },
  button: {
    borderRadius: 40,
    width: 350,
    height: 55,
  },
});
