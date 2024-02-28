import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, Text, TouchableOpacity, Image, KeyboardAvoidingView, Dimensions } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
          <Image
            source={require('../assets/images/landingImage.png')}
            style={{
              width: Dimensions.get('window').width,
              height: 310,
            }} />
          <View
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderTopLeftRadius: 19,
              borderTopRightRadius: 19,
              paddingHorizontal: 20,
              paddingTop: 28,
              marginTop: -20,
            }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize:24, marginVertical: 15 }}>
              Welcome, Please Login First
            </Text>
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              onChangeText={text => setEmail(text)}
              style={{
                marginTop: 15,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
              keyboardType="email-address"
            />
            <Text style={{ color: 'blue', fontWeight: 'bold', marginTop: 15 }}>
              Password
            </Text>
            <TextInput
              placeholder="Masukkan Password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              style={{
                marginTop: 15,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#717171',
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                marginTop: 30,
                backgroundColor: '#243bbb',
                borderRadius: 8,
                paddingVertical: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('BottomNav')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#717171',
                }}>
                Don't Have An Account yet?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#243bbb',
                    marginLeft: 5,
                  }}
                  onPress={() => navigation.navigate('Register')}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;