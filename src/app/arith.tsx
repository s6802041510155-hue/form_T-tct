import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Arith() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState("0");

  const num1 = Number(x);
  const num2 = Number(y);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>🧮 Arithmetic Calculator</Text>
      <Text style={styles.subtitle}>ADD • SUB • MUL • DIV</Text>

      <View style={styles.resultCard}>
        <Text style={styles.resultLabel}>Result</Text>
        <Text style={styles.resultValue}>{result}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>First Number</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter first number"
          value={x}
          onChangeText={setX}
        />

        <Text style={styles.label}>Second Number</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter second number"
          value={y}
          onChangeText={setY}
        />

        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.add]}
            onPress={() => setResult(String(num1 + num2))}
          >
            <Text style={styles.buttonText}>➕ ADD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.sub]}
            onPress={() => setResult(String(num1 - num2))}
          >
            <Text style={styles.buttonText}>➖ SUB</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.mul]}
            onPress={() => setResult(String(num1 * num2))}
          >
            <Text style={styles.buttonText}>✖ MUL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.div]}
            onPress={() => {
              if (num2 === 0) {
                setResult("Cannot divide by 0");
              } else {
                setResult(String(num1 / num2));
              }
            }}
          >
            <Text style={styles.buttonText}>➗ DIV</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.reset]}
          onPress={() => {
            setX("");
            setY("");
            setResult("0");
          }}
        >
          <Text style={styles.buttonText}>🔄 RESET</Text>
        </TouchableOpacity>
      </View>
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
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    fontSize: 16,
    marginBottom: 25,
  },

  resultCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
    alignItems: "center",
    elevation: 6,
  },

  resultLabel: {
    fontSize: 18,
    color: "#888",
  },

  resultValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FF4FA3",
    marginTop: 10,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#555",
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#FFD0EA",
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: "#F8F8F8",
    marginBottom: 15,
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
  },

  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 5,
    elevation: 3,
  },

  add: {
    backgroundColor: "#FF69B4",
  },

  sub: {
    backgroundColor: "#66C7FF",
  },

  mul: {
    backgroundColor: "#9575CD",
  },

  div: {
    backgroundColor: "#81C784",
  },

  reset: {
    backgroundColor: "#FF8A80",
    marginTop: 15,
    marginHorizontal: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
  },
});
