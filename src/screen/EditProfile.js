import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './Style';

export default function EditProfile({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          paddingLeft: 14,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#243bbb" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Montserrat',
            marginLeft: 14,
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 17,
          }}>
          Edit Profile
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={styles.editProfile}>
          <Image
            source={require('../assets/images/photoProfile.png')}
            style={{
              width: 95.11,
              height: 95.11,
              resizeMode: 'contain',
            }}
          />
          <View style={styles.editButton}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                {/* <Image
                  source={require('../assets/icon/Edit_ic.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                /> */}
                <Text
                  style={{
                    fontSize: 18,
                    color: '#243bbb',
                    fontWeight: '500',
                    marginLeft: 15,
                    marginTop: -1,
                  }}>
                  Edit Foto
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.editBio}>
          <View style={{marginBottom: 25}}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Nama</Text>
            <TextInput //component yang digunakan untuk memasukkan data yang kita inginkan
              placeholder="Fahrii Fahriza" //pada tampilan ini, kita ingin user memasukkan email
              style={{
                marginTop: 10,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
              keyboardType="default" //akan muncul tombol @ pada keyboard yang nanti akan memudahkan user mengisi email
            />
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Email</Text>
            <TextInput //component yang digunakan untuk memasukkan data yang kita inginkan
              placeholder="fahriifahriza@gmail.com" //pada tampilan ini, kita ingin user memasukkan email
              style={{
                marginTop: 10,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
              keyboardType="email-address" //akan muncul tombol @ pada keyboard yang nanti akan memudahkan user mengisi email
            />
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>No hp</Text>
            <TextInput //component yang digunakan untuk memasukkan data yang kita inginkan
              placeholder="08124564879" //pada tampilan ini, kita ingin user memasukkan email
              style={{
                marginTop: 10,
                width: '100%',
                borderRadius: 8,
                backgroundColor: '#F6F8FF',
                paddingHorizontal: 10,
              }}
              keyboardType="default" //akan muncul tombol @ pada keyboard yang nanti akan memudahkan user mengisi email
            />
          </View>
        </View>
        <View style={styles.simpanButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text
              style={{
                fontSize: 16.5,
                color: '#FFFFFF',
                fontWeight: '700',
              }}>
              Simpan
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
