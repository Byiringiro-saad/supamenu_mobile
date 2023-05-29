import { StyleSheet, Text, View } from "react-native";

//icons
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Restaurant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Kigali</Text>
      <View style={styles.hero}>
        <View style={styles.one}>
          <FontAwesome5 name="chair" size={30} color="#F7941D" />
          <Text style={styles.one_text}>Choose table</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.one}>
          <Feather name="phone-call" size={30} color="#F7941D" />
          <Text style={styles.one_text}>Call waiter</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <Text style={styles.sub_title}>Menu</Text>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text>Appetizer</Text>
            <AntDesign name="right" size={15} color="black" />
          </View>
          <View style={styles.row}>
            <Text>Starter</Text>
            <AntDesign name="right" size={15} color="black" />
          </View>
          <View style={styles.row}>
            <Text>Main</Text>
            <AntDesign name="right" size={15} color="black" />
          </View>
          <View style={styles.row}>
            <Text>Dessert</Text>
            <AntDesign name="right" size={15} color="black" />
          </View>
          <View style={styles.row}>
            <Text>Drink</Text>
            <AntDesign name="right" size={15} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: "bold",
  },
  hero: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  one: {
    width: "45%",
    marginHorizontal: 10,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  line: {
    width: 2,
    height: "80%",
    backgroundColor: "#F7941D",
  },
  one_text: {
    marginTop: 10,
  },
  menu: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    marginTop: 40,
  },
  sub_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F7941D",
    marginVertical: 20,
  },
  content: {
    width: "100%",
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    width: "100%",
    height: 60,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Restaurant;
