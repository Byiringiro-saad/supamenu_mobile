import { Pressable, StyleSheet, Text, View } from "react-native";

const Results = ({ navigation }) => {
  const back = () => {
    navigation.navigate("Index");
  };

  return (
    <View style={styles.results}>
      <View style={styles.top}>
        <Pressable onPress={back}>
          <View style={styles.back}>
            <Text>Back</Text>
          </View>
        </Pressable>
        <Text>12 Results</Text>
      </View>
      <View style={styles.resultsContainer}>
        <View style={styles.box}>
          <View style={styles.image}></View>
          <View style={styles.info}>
            <Text style={styles.name}>Restaurant Name</Text>
            <Text style={styles.address}>Restaurant Address</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.image}></View>
          <View style={styles.info}>
            <Text style={styles.name}>Restaurant Name</Text>
            <Text style={styles.address}>Restaurant Address</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.image}></View>
          <View style={styles.info}>
            <Text style={styles.name}>Restaurant Name</Text>
            <Text style={styles.address}>Restaurant Address</Text>
          </View>
        </View>
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
    width: 80,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#e4e5e7",
    alignItems: "center",
    justifyContent: "center",
  },
  resultsContainer: {
    width: "100%",
    height: "100%",
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
