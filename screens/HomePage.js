import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import IconButton from "../components/IconButton";
import tw from 'twrnc';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const HomePage = ({ navigation }) => {

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

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
              onPress={() => navigation.navigate("Welcome")}
            />
          </View>
        );
      },
    });
  });

  return (
    <>
      <View style={tw`flex-1 items-center bg-white`}>
        <MapView
          style={tw`w-full h-full`} 
          provider={PROVIDER_GOOGLE}
          region={currentLocation}
          showsUserLocation={true}
          mapType="hybrid"
          followsUserLocation={true}
        >
          <Marker
            coordinate={currentLocation}
            title="Current Location"
            description="This is your current location"
          />
        </MapView>
      </View>
      <Button title="Get Location" onPress={userLocation} />
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
