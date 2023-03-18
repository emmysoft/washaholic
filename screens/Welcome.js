import { Image, StyleSheet, View } from "react-native";
import LoginButton from "../components/LoginButton";
import SIgnupButton from "../components/SIgnupButton";
import Login from "./Login";

const Welcome = () => {
  return (
    <View style={styles.layout}>
      <Image
        source={require("../assets/washaholic.png")}
        width={300}
        height={200}
        alt="logo"
      />
      <View style={styles.buttonlayout}>
        <LoginButton>Sign in</LoginButton>
        <SIgnupButton>Sign up</SIgnupButton>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    width: "100%",
    height: "100%",
    gap: 100,
  },
  buttonlayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: 24,
  },
  button: {
    borderRadius: 40,
    width: 350,
    height: 55,
  },
});
