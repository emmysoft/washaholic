import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IoFingerPrint from "react-icons/io";

import LoginButton from "../components/LoginButton";
import SIgnupButton from "../components/SIgnupButton";

const Welcome = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.scroll}>
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
      </ScrollView>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    // width: "100%",
    // height: "100%",
    gap: 100,
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
  }
});
