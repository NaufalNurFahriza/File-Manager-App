import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from 'react-native';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
          <Image
            source={require('../assets/images/landingImage.png')}
            style={{
              width: Dimensions.get('window').width,
              height: 220,
            }}
          />
          <View className="w-full bg-white rounded-t-2xl px-5 pt-7 -mt-5">
            <Text className="text-gray-900 font-bold text-2xl my-4">
              Welcome, Please create your account
            </Text>
            <Text className="text-blue-900 font-bold text-sm">Nama</Text>
            <TextInput
              placeholder="Masukkan Nama"
              className="my-4 w-full rounded-lg bg-slate-100 px-3"
              keyboardType="default"
            />
            <Text className="text-blue-900 font-bold text-sm">Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              className="my-4 w-full rounded-lg bg-slate-100 px-3"
              keyboardType="email-address"
            />
            <Text className="text-blue-900 font-bold text-sm">Password</Text>
            <TextInput
              placeholder="Masukkan Password"
              secureTextEntry={true}
              className="my-4 w-full rounded-lg bg-slate-100 px-3"
            />
            <Text className="text-blue-900 font-bold text-sm">
              Confirm Password
            </Text>
            <TextInput
              placeholder="Masukkan Nomor Handphone"
              className="my-4 w-full rounded-lg bg-slate-100 px-3"
              keyboardType="numeric"
            />
            <TouchableOpacity
              className="w-full rounded-lg my-6 py-4 bg-blue-800 justify-center items-center"
              onPress={() => navigation.navigate('BottomNav')}>
              <Text className="text-white font-bold text-lg">Register</Text>
            </TouchableOpacity>
            <View className="w-full justify-center items-center my-3 flex-row">
              <Text className="text-md text-gray-600">
                already have an account?
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-md text-blue-900 font-medium ml-1"
                  onPress={() => navigation.navigate('Login')}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Register;
