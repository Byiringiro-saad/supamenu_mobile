import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Search from "./search";
import Result from "./result";
import Results from "./results";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Index = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Index">
      <Stack.Screen name="Index" component={Search} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default Index;
