import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function Form() {
  const depts = [
    { label: "Civil Engineering", value: "CE" },
    { label: "Computer Education", value: "CED" },
    { label: "Electrical Engineering", value: "EE" },
    { label: "Mechanical Engineering", value: "ME" },
    { label: "Teaching Training", value: "TT" },
  ];

  const [data, setData] = useState({
    name: "",
    gender: "",
    dept: "",
    comment: "",
    isAgree: false,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <LinearGradient
          colors={["#FF8EC7", "#FF69B4", "#A6E3FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <Text style={styles.avatar}>👩🏻‍🎓</Text>

          <Text style={styles.title}>Student Registration</Text>

          <Text style={styles.subtitle}>
            Please fill in your information
          </Text>
        </LinearGradient>

        {/* Information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📋 Information</Text>

          <Text style={styles.info}>👤 Name : {data.name || "-"}</Text>
          <Text style={styles.info}>🚻 Gender : {data.gender || "-"}</Text>
          <Text style={styles.info}>🎓 Department : {data.dept || "-"}</Text>
          <Text style={styles.info}>💬 Comment : {data.comment || "-"}</Text>
          <Text style={styles.info}>
            ✅ Agree : {data.isAgree ? "Yes" : "No"}
          </Text>
        </View>

        {/* Name */}
        <View style={styles.card}>
          <Text style={styles.label}>👤 Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={data.name}
            onChangeText={(text) =>
              setData({ ...data, name: text })
            }
          />
        </View>

        {/* Gender */}
        <View style={styles.card}>
          <Text style={styles.label}>🚻 Gender</Text>

          <RadioButton.Group
            value={data.gender}
            onValueChange={(value) =>
              setData({ ...data, gender: value })
            }
          >
            <View style={styles.radioRow}>
              <RadioButton value="Male" />
              <Text>Male</Text>
            </View>

            <View style={styles.radioRow}>
              <RadioButton value="Female" />
              <Text>Female</Text>
            </View>
          </RadioButton.Group>
        </View>

        {/* Department */}
        <View style={styles.card}>
          <Text style={styles.label}>🎓 Department</Text>

          <Dropdown
            style={styles.dropdown}
            data={depts}
            labelField="label"
            valueField="value"
            placeholder="Select Department"
            value={data.dept}
            maxHeight={300}
            onChange={(item) =>
              setData({ ...data, dept: item.value })
            }
          />
        </View>

        {/* Comment */}
        <View style={styles.card}>
          <Text style={styles.label}>💬 Comment</Text>

          <TextInput
            multiline
            style={styles.comment}
            placeholder="Enter your comment"
            value={data.comment}
            onChangeText={(text) =>
              setData({ ...data, comment: text })
            }
          />
        </View>

        {/* Agree */}
        <View style={styles.card}>
          <View style={styles.switchRow}>
            <Text style={styles.label}>✅ Do you agree?</Text>

            <Switch
              value={data.isAgree}
              thumbColor="#FF4FA3"
              trackColor={{
                false: "#DDD",
                true: "#8FD3FF",
              }}
              onValueChange={(value) =>
                setData({ ...data, isAgree: value })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5FB",
  },

  header: {
    margin: 20,
    borderRadius: 25,
    paddingVertical: 30,
    alignItems: "center",
    elevation: 8,
  },

  avatar: {
    fontSize: 60,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 8,
    color: "#FFFFFF",
    fontSize: 15,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF4FA3",
    marginBottom: 12,
    textAlign: "center",
  },

  info: {
    fontSize: 16,
    marginVertical: 5,
    color: "#444",
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 18,
    borderRadius: 20,
    padding: 18,
    elevation: 4,
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FF4FA3",
    marginBottom: 10,
  },

  input: {
    height: 55,
    backgroundColor: "#FFF9FC",
    borderWidth: 1.5,
    borderColor: "#FFD6EA",
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  dropdown: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#A6E3FF",
    borderRadius: 15,
    paddingHorizontal: 15,
  },

  comment: {
    height: 120,
    backgroundColor: "#FFF9FC",
    borderWidth: 1.5,
    borderColor: "#FFD6EA",
    borderRadius: 15,
    padding: 15,
    textAlignVertical: "top",
    fontSize: 16,
  },

  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8FC",
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 10,
  },

  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});