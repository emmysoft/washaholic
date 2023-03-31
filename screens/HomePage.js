import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import Services from "../components/Services";
import PLACES from "../utils/data";

const HomePage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.top}>
            <IconButton
              onPress={() => navigation.navigate("Profile")}
              name="person"
              size={24}
              color="#054A98"
              style={{ paddingRight: 24 }}
            />

            <IconButton
              name="log-out"
              size={24}
              style={styles.logoutstyle}
              color="#ff0000"
              onPress={()  => navigation.navigate("Welcome")}
            />
          </View>
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
        renderItem={({ item }) => (
          <Services business={item.business} address={item.address} />
        )}
        S
      />
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 7,
    padding: 12,
  },
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
    marginBottom: 40,
  },
  logoutstyle: {
    color: "#ff0000",
  },
});
