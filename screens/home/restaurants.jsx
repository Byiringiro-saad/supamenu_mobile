import { StyleSheet, Text, View } from "react-native";

const Restaurants = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Restaurants</Text>
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
});

export default Restaurants;
