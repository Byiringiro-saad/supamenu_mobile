import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Login from "./screens/login";
import Signup from "./screens/signup";
import Container from "./components/container";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="Index"
        activeColor="#fff"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Index" component={Container} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
