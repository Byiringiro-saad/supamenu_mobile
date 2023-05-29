import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, TextInput, View } from "react-native";

//icons
import { Feather } from "@expo/vector-icons";

const Search = ({ navigation }) => {
  //config
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    navigation.navigate("Results");
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 130,
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
});

export default Search;
