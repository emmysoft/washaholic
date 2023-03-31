import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Services = ({ business, address }) => {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.biz}>
          <Text style={styles.dryCleaner}>{business}</Text>
          <Text style={styles.location}>{address}</Text>
        </View>
        <View style={styles.biz}>
          <Text style={styles.dryCleaner}>{business}</Text>
          <Text style={styles.location}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  parent: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 30,
    marginTop: 10,
  },
  dryCleaner: {
    fontSize: 20,
    fontFamily: "roboto",
  },
  location: {
    fontSize: 17,
    fontFamily: "roboto-italic",
    textAlign: "center",
    width: 150,
  },
  biz: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#808080",
    padding: 9,
  },
});
