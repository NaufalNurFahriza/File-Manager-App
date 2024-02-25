// Login.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Username"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray', width: 200 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray', width: 200 }}
      />
      <Button title="Login" onPress={() => navigation.navigate('BottomNav')} />
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

export default Login;
