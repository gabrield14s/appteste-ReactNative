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
      <Welcome text="Sign in"></Welcome>
      <TextInput style={styles.input} placeholder="E-mail" value={username} onChangeText={setUsername}></TextInput>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword}></TextInput>
      <View style={styles.divButton}>
        <MyButton title="Entrar" action={login}></MyButton>
        <MyButton title="Registrar" action={register}></MyButton>
      </View>
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
    borderBottomWidth: 0.5,
    width: '50%',
    height: 40,
    paddingLeft: 6,
    marginTop: 6,
  },
  label: {
    fontSize: 16,
    marginTop: 40,
  },
  divButton: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  company: {
    position: 'absolute',
    bottom: 60,
    color: '#85929E'
  }
});
