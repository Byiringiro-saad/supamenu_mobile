import { Pressable, StyleSheet, Text, View } from "react-native";

//icons
import { AntDesign } from "@expo/vector-icons";

const Results = ({ navigation }) => {
  const back = () => {
    navigation.navigate("Index");
  };

  const goToRestaurant = () => {
    navigation.navigate("Result");
  };

  return (
    <View style={styles.results}>
      <View style={styles.top}>
        <Pressable onPress={back}>
          <View style={styles.back}>
            <AntDesign name="left" size={24} color="black" />
          </View>
        </Pressable>
        <Text>12 Results</Text>
      </View>
      <View style={styles.resultsContainer}>
        {[...Array(5)].map((item, index) => (
          <Pressable key={index} onPress={goToRestaurant}>
            <View style={styles.box}>
              <View style={styles.image}></View>
              <View style={styles.info}>
                <Text style={styles.name}>Restaurant Name</Text>
                <Text style={styles.address}>Restaurant Address</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    padding: 15,
    paddingTop: 60,
    width: "100%",
    height: "100%",
    overflow: "scroll",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  top: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#e4e5e7",
    alignItems: "center",
    justifyContent: "center",
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

export default Results;
