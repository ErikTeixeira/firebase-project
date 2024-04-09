import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const [error, setErrror] = React.useState('');

  const createUser = () => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, pass)
      .then(userCredentials => {
        console.log("Sucessooo!!",
        userCredentials.user);
      })
      .catch((error) => {
        console.log("Error!!", error)
      })
      .finally(() => {
        console.log("Finall!!")
      })
  }

  const loginUser = () => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, pass)
      .then(userCredentials => {
        console.log("Sucessooo!!",
        userCredentials.user);
      })
      .catch((error) => {
        console.log("Error!!", error)
      })
      .finally(() => {
        console.log("Finall!!")
      })
  }

  const logout = () => {
    const auth = getAuth(app);
    auth.signOut()
  }

  return (
    <View style={styles.container}>
      <Text>{"Voce nao esta logado"}</Text>
      <TextInput 
        style={styles.input} 
        value={email}
        onChangeText={setEmail}
        placeholder='email'
      />
      <TextInput 
        style={styles.input} 
        value={pass}
        onChangeText={setPass}
        placeholder='senha'
      />

      <Button title='Login' onPress={loginUser} />
      <Button title='Cadastrar' onPress={createUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
