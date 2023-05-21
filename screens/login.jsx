import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

//icons
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const signup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <Text style={styles.dark}>
            Supa<Text style={styles.bright}>Menu</Text>
          </Text>
          <Text style={styles.sub}>Welcome back!</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.row}>
            <AntDesign name="mail" size={24} color="#9098B1" />
            <TextInput style={styles.input} placeholder="Email address" />
          </View>
          <View style={styles.row}>
            <AntDesign name="lock" size={24} color="#9098B1" />
            <TextInput style={styles.input} placeholder="password" />
          </View>
          <View style={styles.button}>
            <Text style={styles.btn_text}>Login</Text>
          </View>
        </View>
        <View style={styles.down}>
          <Text style={styles.down_text}>Don't have an account?</Text>
          <Pressable onPress={signup} style={() => styles.view}>
            <Text style={styles.bright}>Signup</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7941D",
  },
  dark: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#223263",
  },
  bright: {
    color: "#F7941D",
  },
  sub: {
    marginTop: 10,
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 100,
  },
  top: {
    marginBottom: 30,
  },
  form: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#EBF0FF",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  input: {
    width: "90%",
    height: "100%",
    marginLeft: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#F7941D",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  btn_text: {
    color: "#fff",
    fontWeight: "bold",
  },
  down: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  down_text: {
    color: "#9098B1",
  },
  view: {
    marginLeft: 5,
  },
});

export default Login;
