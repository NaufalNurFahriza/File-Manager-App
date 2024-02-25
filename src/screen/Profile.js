// Profile.js
import React from 'react';
import { View, Button } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Profile;
