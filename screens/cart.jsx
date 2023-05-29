import { Pressable, StyleSheet, Text, View } from "react-native";

//icons
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Cart</Text>
      </View>
      <View style={styles.products}>
        {[...Array(3)].map((item, index) => (
          <Pressable key={index}>
            <View style={styles.box}>
              <View style={styles.image}></View>
              <View style={styles.info}>
                <Text
                  style={styles.ingredients}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  Kaffir Lime Vodka, Lemongrass, Ginger
                </Text>
                <Text style={styles.name}>Tom Yummy - 12.5</Text>
                <Text style={styles.price}>Frw 5,000</Text>
              </View>
              <View style={styles.operate}>
                <AntDesign name="minus" size={18} color="black" />
                <Text style={styles.amount}>0</Text>
                <AntDesign name="plus" size={18} color="black" />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
      <View style={styles.details}>
        <View style={styles.up}>
          <Text style={styles.sub_title}>Total</Text>
          <Text style={styles.price}>Frw 17,000</Text>
        </View>
        <Pressable style={styles.button}>
          <Text>Proceed to checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 60,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "scroll",
  },
  top: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  products: {
    width: "100%",
    height: "auto",
    marginTop: 10,
  },
  box: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    backgroundColor: "#e4e5e7",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  info: {
    marginLeft: 10,
  },
  ingredients: {
    fontSize: 12,
    width: "100%",
    overflow: "hidden",
  },
  name: {
    fontSize: 14,
    marginVertical: 5,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F7941D",
  },
  operate: {
    width: "auto",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  details: {
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 100,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 15,
  },
  up: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sub_title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "#F7941D",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;
