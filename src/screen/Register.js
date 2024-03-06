import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Button,
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
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 24,
                marginVertical: 15,
              }}>
              Welcome, Please create your account
            </Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Nama</Text>
            <TextInput
              placeholder="Masukkan Nama"
              style={{
                marginTop: 15,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
              keyboardType="default"
            />

            <Text style={{color: 'blue', fontWeight: 'bold'}}>Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              style={{
                marginTop: 15,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
              keyboardType="email-address"
            />

            <Text style={{color: 'blue', fontWeight: 'bold', marginTop: 15}}>
              Password
            </Text>
            <TextInput
              placeholder="Masukkan Password"
              secureTextEntry={true}
              style={{
                marginTop: 15,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
            />

            <Text style={{color: 'blue', fontWeight: 'bold', marginTop: 15}}>
              Confirm Password
            </Text>
            <TextInput
              placeholder="Masukkan Ulang Password"
              secureTextEntry={true}
              style={{
                marginTop: 15,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
            />

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
                Register
              </Text>
            </TouchableOpacity>
          </View>

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
              already have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#243bbb',
                  marginLeft: 5,
                }}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Register;