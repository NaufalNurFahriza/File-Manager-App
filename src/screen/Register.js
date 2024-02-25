// Register.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Register = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Username"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray', width: 200 }}
      />
      <TextInput
        placeholder="Email"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray', width: 200 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray', width: 200 }}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray', width: 200 }}
      />
      <Button title="Register" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default Register;
