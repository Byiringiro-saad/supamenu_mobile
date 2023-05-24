import { StyleSheet, TextInput, View } from "react-native";

//icons
import { Feather } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Feather name="search" size={24} color="#F7941D" />
        <TextInput
          style={styles.input}
          placeholder="Search for your preferred restaurant"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 150,
    backgroundColor: "#F7941D",
  },
  search: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  input: {
    width: "90%",
  },
});

export default Search;
