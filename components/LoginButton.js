import { StyleSheet, Text, Pressable } from "react-native";

const LoginButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    width: 300,
    height: 55,
    backgroundColor: "#054a98",
    borderRadius: 30,
    marginHorizontal: 20,
    cursor: "pointer",
  },
  buttonText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
