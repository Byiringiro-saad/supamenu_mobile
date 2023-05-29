import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Search from "./search";
import Results from "./results";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Index = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Index">
        <Stack.Screen name="Index" component={Search} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default Index;
