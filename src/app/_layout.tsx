import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FF69B4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        drawerStyle: {
          backgroundColor: "#FFF4FA",
          width: 280,
        },

        drawerActiveBackgroundColor: "#FFD6EC",
        drawerActiveTintColor: "#FF4FA3",
        drawerInactiveTintColor: "#666",

        drawerLabelStyle: {
          fontSize: 18,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="arith"
        options={{
          title: "Calculator",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calculator" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="form"
        options={{
          title: "Registration Form",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}