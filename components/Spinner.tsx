import * as React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export function Spinner() {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 50,
  },
});
