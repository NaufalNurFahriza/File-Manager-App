import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './Style';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={styles.profile}>
          <Image
            source={require('../assets/images/photoProfile.png')} 
            style={{
              width: 95.11,
              height: 95.11,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: '#050152',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            Fahrii Fahriza
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: '#A8A8A8',
              fontWeight: '500',
            }}>
            fahriifahriza@gmail.com
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <View
              style={{
                width: 64.54,
                height: 27.17,
                borderRadius: 18.115,
                backgroundColor: '#F6F8FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 25,
              }}>
              <Text
                style={{
                  fontSize: 12.5,
                  color: '#050152',
                  fontWeight: '600',
                }}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuProfile}>
          <View style={styles.settingProfile}>
            <Text className="text-slate-800 text-lg font-semibold my-4">
              About
            </Text>
          </View>
        </View>
        <View style={styles.logoutBox}>
          <View style={styles.logoutButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={{flexDirection: 'row'}}>
                {/* <Image
                  source={require('../assets/icon/Log_out_ic.png')} //load asset dari local
                  style={{
                    width: 19,
                    height: 18,
                  }}
                /> */}
                <Text
                  style={{
                    fontSize: 16,
                    color: '#243bbb',
                    fontWeight: '500',
                    marginLeft: 5,
                    marginTop: -2,
                  }}>
                  Log out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Profile;