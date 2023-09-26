import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../components/Logo';
import Welcome from '../components/Welcome';
import MyButton from '../components/Button';
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('Botão de login pressionado...');
    console.log('Username: ' + username);
    console.log('Password: ' + password);
  }

  const register = () => {
    console.log('Botão de registro pressionado...');
  }

  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Welcome text="Informe os dados para entrar!"></Welcome>
      <TextInput style={styles.input} value={username} onChangeText={setUsername}></TextInput>
      <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={setPassword}></TextInput>
      <MyButton title="Entrar" action={login}></MyButton>
      <MyButton title="Registrar" action={register}></MyButton>
      <Text style={styles.label}>Não tem conta? Clique aqui</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 0.5,
    width: '70%',
    height: 40,
    borderRadius: 8,
    paddingLeft: 6,
    marginTop: 6
  },
  label: {
    fontSize: 16,
    marginTop: 40,
  },
  company: {
    position: 'absolute',
    bottom: 60,
    color: '#85929E'
  }
});
