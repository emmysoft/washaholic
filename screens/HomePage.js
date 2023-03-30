import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import Services from "../components/Services";
import { PLACES } from "../utils/data";

const HomePage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={() => navigation.navigate("Profile")}
            name="person"
            size={24}
            color="#054A98"
            style={{ paddingRight: 24 }}
          />
        );
      },
    });
  });

  return (
    <>
      <View style={styles.head}>
        <Image
          source={require("../assets/washaholic.png")}
          style={styles.homeImage}
          alt="logo"
        />
        <Text style={styles.homeheader}>Nearest Dry Cleaners to you </Text>
      </View>
      <FlatList
        data={PLACES}
        renderItem={({ item }) => {
          <Services />;
        }}
      />
      {/* <View style={styles.logout}>
        <IconButton name="log-out" size={24} color="#fff" />
        <Text
          style={styles.logoutText}
          onPress={() => navigation.navigate("Welcome")}
        >
          Logout
        </Text>
      </View> */}
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  head: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    gap: 10,
  },
  homeImage: {
    width: 210,
    height: 100,
    marginHorizontal: 80,
    marginVertical: 70,
    marginBottom: 20,
    marginTop: 20,
  },
  homeheader: {
    fontSize: 24,
    color: "#1976D2",
    fontFamily: "roboto",
  },
  // logout: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 10,
  //   borderWidth: 2,
  //   borderColor: "#ff0000",
  //   borderRadius: 10,
  //   backgroundColor: "#ff0000",
  //   width: "50%",
  //   marginHorizontal: 90,
  // },
  // logoutText: {
  //   fontFamily: "roboto",
  //   fontWeight: 300,
  //   fontSize: 20,
  //   color: "#fff",
  //   textAlign: "center",
  //   padding: 15,
  // },
});
