import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

//screens
import Home from "../screens/home";
import Cart from "../screens/cart";
import Search from "../screens/search";
import History from "../screens/history";
import Notifications from "../screens/notifications";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#F7941D",
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 90,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
};

const Container = () => {
  return (
    <Tab.Navigator initialRouteName="Search" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Container;
