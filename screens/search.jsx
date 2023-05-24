import { useForm, Controller } from "react-hook-form";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";

import { useState } from "react";
//icons
import { Feather } from "@expo/vector-icons";

const Search = () => {
  //local data
  const [showResults, setShowResults] = useState(false);

  //config
  const { handleSubmit, control, reset } = useForm();

  const back = () => {
    reset({ search: "" });
    setShowResults(false);
  };

  const onSubmit = (data) => {
    setShowResults(true);
  };

  return (
    <View
      style={[styles.container, showResults ? styles.whiteBg : styles.brightBg]}
    >
      {showResults ? (
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
      ) : (
        <View style={styles.search}>
          <Feather name="search" size={24} color="#F7941D" />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                style={styles.input}
                onChangeText={(value) => onChange(value)}
                placeholder="Search for your preferred restaurant"
              />
            )}
            name="search"
            rules={{ required: true }}
          />
          <View style={styles.button}>
            <Button title="Search" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  whiteBg: {
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  brightBg: {
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
    marginLeft: 10,
  },
  button: {
    opacity: 0,
  },
  results: {
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

export default Search;
