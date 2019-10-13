import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>#Teste</Text>
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    margin: 10
  },
  box: {
    width: 60,
    height: 70,
    backgroundColor: "#F00"
  }
});
