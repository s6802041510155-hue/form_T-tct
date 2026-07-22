import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>💖 Counter App</Text>

      <Text style={styles.subtitle}>
        Increase, Decrease and Reset Counter
      </Text>

      <View style={styles.resultCard}>
        <Text style={styles.resultTitle}>🔢 Current Count</Text>
        <Text style={styles.display}>{count}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.addButton]}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>➕ Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.subButton]}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.buttonText}>➖ Decrease</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>🔄 Reset</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF4FA",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF4FA3",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 25,
  },

  resultCard: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFC0E8",
    marginBottom: 30,
    elevation: 5,
    alignItems: "center",

    shadowColor: "#FF69B4",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  resultTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF4FA3",
  },

  display: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
  },

  button: {
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  addButton: {
    backgroundColor: "#FF69B4",
  },

  subButton: {
    backgroundColor: "#6EC6FF",
  },

  resetButton: {
    backgroundColor: "#FF8A80",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});