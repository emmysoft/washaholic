import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import { useEffect } from "react";
import tw from "twrnc";
// import MapView from "react-native-maps";

import IconButton from "../components/IconButton";

const Profile = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="home"
            size={25}
            color="#054A98"
            onPress={() => navigation.navigate("Home")}
            style={{ paddingRight: 24 }}
          />
        );
      },
    });
  }, [navigation]);

  return (
    // <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Image
          source={require("../assets/avatar.png")}
          alt="logo"
          style={styles.profilePics}
        />
        <Text style={styles.profilename}> Welcome John Doe</Text>
      </View>
    // </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e5e5e5",
    width: "100%",
    height: "100%",
  },
  profilePics: {
    borderRadius: 150,
    borderWidth: 3,
    shadowColor: "#fff",
    shadowOpacity: 1,
    shadowOffset: { width: -2, height: 4 },
    width: 100,
    height: 100,
    backgroundColor: "#fff",
  },
  profilename: {
    fontWeight: 500,
    fontSize: 20,
    fontStyle: "normal",
    color: "#054a98",
    padding: 5,
  },
  favorite: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 20,
  },
  favText: {
    // fontWeight: 700,
    fontSize: 24,
    fontFamily: "roboto-bold"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  starstyles: {
    backgroundColor: "#ffd700",
  },
  favContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
    padding: 40,
  },
  services: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderWidth: 3,
    padding: 12,
    borderColor: "#fff",
    width: 320,
  },
  drycleaner: {
    borderRadius: 40,
    width: 200,
    height: 150,
    padding: 30,
    borderWidth: 3,
    marginHorizontal: 40,
  },
  home: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#ff0000",
    borderRadius: 10,
    backgroundColor: "#ff0000",
  },
  hometext: {
    fontWeight: 500,
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    padding: 15,
  },
  bizName: {
    textAlign: "center",
    fontWeight: 300,
    fontSize: 20,
    textAlign: "center",
    color: "#1976D2",
    padding: 10,
  },
  bizAddress: {
    textAlign: "center",
    fontWeight: 200,
    fontSize: 20,
    fontStyle: "normal",
  },
  bizStar: {
    justifyContent: "center",
    marginHorizontal: 120,
    padding: 10,
  },
});
