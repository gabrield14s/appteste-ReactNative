import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function MyButton({title, action}) {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0072E1',
    width: '15%',
    borderRadius: 8,
    marginTop: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    padding: 12,
  }
});