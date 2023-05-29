import { Pressable, StyleSheet, Text, View } from "react-native";

const Result = ({ navigation }) => {
  const enter = () => {
    navigation.navigate("Restaurant");
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <Text style={styles.title}>Choose Kigali</Text>
      <Text>Press enter to checkout menu from the restautrant</Text>
      <View style={styles.down}>
        <Pressable style={styles.button} onPress={enter}>
          <Text style={styles.button_text}>Enter</Text>
        </Pressable>
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
  image: {
    width: "100%",
    height: "55%",
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  down: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#F7941D",
    marginBottom: 20,
    marginTop: 20,
  },
  button_text: {
    fontSize: 15,
    color: "#fff",
  },
});

export default Result;
