import { Pressable, StyleSheet, Text, View } from "react-native";

//icons
import { Entypo } from "@expo/vector-icons";

const Restaurants = ({ navigation }) => {
  const goToRestaurant = () => {
    navigation.navigate("Restaurant");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>My Restaurants</Text>
        <Entypo name="plus" size={24} color="#000000" />
      </View>
      <View style={styles.resultsContainer}>
        {[...Array(5)].map((item, index) => (
          <Pressable key={index} onPress={goToRestaurant}>
            <View style={styles.box}>
              <View style={styles.image}></View>
              <View style={styles.info}>
                <Text style={styles.name}>Restaurant Name</Text>
                <View style={styles.details}>
                  <Text style={styles.address}>Table: N8</Text>
                  <Text style={styles.address}>Status: Served</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    paddingTop: 60,
  },
  top: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resultsContainer: {
    width: "100%",
    height: "90%",
    marginTop: 20,
  },
  box: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#e4e5e7",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default Restaurants;
