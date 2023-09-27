import { StyleSheet, Text } from "react-native";

export default function Welcome( {text} ) {
  return (
    <Text style={styles.label}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20
  }
});