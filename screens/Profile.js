import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Profile = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Image
          source={require("../assets/avatar.png")}
          alt="logo"
          style={styles.profilePics}
        />
        <Text style={styles.profilename}>John Doe</Text>
        <View style={styles.favorite}>
          <Text style={styles.favText}>Your Favorites </Text>
          <View style={styles.stars}>
            <AntDesign name="star" size={24} color={"#ffd700"} />
            <AntDesign name="star" size={24} color={"#ffd700"} />
            <AntDesign name="star" size={24} color={"#ffd700"} />
          </View>
        </View>
        <View style={styles.favContainer}>
          <View style={styles.services}>
            <Image
              source={require("../assets/cloths.jpg")}
              alt="image"
              style={styles.drycleaner}
            />
            <Text>YinkLean Services</Text>
            <Text>National Assembly lodge, Apatapiti, South Gate</Text>
            <AntDesign name="star" size={24} color={"#ffd700"} />
          </View>
          <View style={styles.services}>
          <Image
              source={require("../assets/cloths.jpg")}
              alt="image"
              style={styles.drycleaner}
            />
            <Text>YinkLean Services</Text>
            <Text>National Assembly lodge, Apatapiti, South Gate</Text>
            <AntDesign name="star" size={24} color={"#ffd700"} />
          </View>
          <View style={styles.services}>
          <Image
              source={require("../assets/cloths.jpg")}
              alt="image"
              style={styles.drycleaner}
            />
            <Text>YinkLean Services</Text>
            <Text>National Assembly lodge, Apatapiti, South Gate</Text>
            <AntDesign name="star" size={24} color={"#ffd700"} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
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
    fontWeight: 700,
    fontSize: 24,
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
});
