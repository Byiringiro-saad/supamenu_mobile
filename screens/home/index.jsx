import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Products from "./products";
import Restaurant from "./restaurant";
import Restaurants from "./restaurants";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="Restaurants"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Restaurants" component={Restaurants} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default Home;
