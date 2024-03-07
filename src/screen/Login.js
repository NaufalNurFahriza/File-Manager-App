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
          <View className="w-full bg-white rounded-t-2xl px-5 pt-7 -mt-5">
              <Text className="text-gray-900 font-bold text-2xl my-4"
>
              Welcome, Please Login First
            </Text>
            <Text className="text-blue-900 font-bold text-sm"
>Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              onChangeText={text => setEmail(text)}
              className="my-4 w-full rounded-lg bg-slate-100 px-3"
              keyboardType="email-address"
            />
            <Text className="text-blue-900 font-bold text-sm"
>
              Password
            </Text>
            <TextInput
              placeholder="Masukkan Password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              className="my-4 w-full rounded-lg bg-slate-100 px-3"

            />
            {/* <View
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
            </View> */}
            <TouchableOpacity
            className=" w-full rounded-lg my-6 py-4 bg-blue-800 justify-center items-center"

              onPress={() => navigation.navigate('BottomNav')}>
              <Text className="text-white font-bold text-lg"
 >
                Login
              </Text>
            </TouchableOpacity>
            <View className="w-full justify-center items-center my-3 flex-row"
>
              <Text className="text-md text-gray-600"
>
                Don't Have An Account yet?
              </Text>
              <TouchableOpacity>
                <Text className="text-md text-blue-900 font-medium ml-1"

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