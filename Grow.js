import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"; // Thêm Button vào đây
// import { NavigationContainer } from "@react-navigation/native";

export default function Grow() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.title1}>Grow</Text>
      <Text style={styles.title2}>Your Business</Text>
      <Text style={styles.subtitle}>
        We will help you grow your business using {"\n"}online servers
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signup}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>HOW WE WORK?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00CCF9",
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 15,
    borderColor: "black",
    margin: 90,
  },

  title1: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "Roboto",
    textAlign: "center",
  },
  title2: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "Roboto",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 80,
    fontWeight: "bold",
    fontStyle: "Roboto",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "yellow",
    padding: 15,
    borderRadius: 10,
    margin: 60,
    width: 90,
    height: 48,
  },
  login: {
    fontWeight: "bold",
    fontStyle: "Roboto",
  },
  signup: {
    fontWeight: "bold",
    fontStyle: "Roboto",
  },
  footer: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "Roboto",
    textAlign: "center",
  },
});
