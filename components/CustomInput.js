import { StyleSheet, TextInput, View } from "react-native";

const CustomInput = ({value, setValue, placeholder}) => {

  return (
    <View style={styles.textinput}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textinput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#04509c",
    borderRadius: 20,
    padding: 15,
  }
});