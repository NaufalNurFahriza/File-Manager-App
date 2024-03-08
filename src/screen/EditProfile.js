import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './Style';
import LinearGradient from 'react-native-linear-gradient';

export default function EditProfile({navigation}) {
  return (
    <View className="flex-1 bg-slate-200">
      <View className="w-full h-16 bg-white flex-row self-center items-center pl-3 shadow-md">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#243bbb" />
        </TouchableOpacity>
        <Text className="ml-3 font-bold text-lg text-stone-600">
          Edit Profile
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <ImageBackground
          source={require('../assets/images/Book_Pattern.png')}
          resizeMode="cover"
          className="h-60">
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}
            colors={['rgba(5, 74, 122, 0.85)', 'rgba(10, 136, 225, 0.75)']}
            className="px-6 py-6 h-60">
            <View className="py-10 items-center">
              <Image
                source={require('../assets/images/photoProfile.png')}
                className="w-28 h-28 object-contain my-3 border-2 border-black"
              />
              <View className="bg-blue-500 items-center my-4 px-4 py-2 rounded-3xl">
                <TouchableOpacity>
                  <View className="flex-row items-center">
                    <MaterialIcons name="edit" size={20} color="white" />
                    <Text className="text-base text-white font-medium ml-2">
                      Edit Photo
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View className="px-6 py-6">
          <View className="mb-6">
            <Text className="text-blue-700 font-bold">Nama</Text>
            <TextInput
              placeholder="Agus Susanto"
              className="w-full mt-3 rounded-lg bg-slate-50 px-3"
              keyboardType="default"
            />
          </View>

          <View className="mb-6">
            <Text className="text-blue-700 font-bold">Email</Text>
            <TextInput
              placeholder="agussusanto@gmail.com"
              className="w-full mt-3 rounded-lg bg-slate-50 px-3"
              keyboardType="email-address"
            />
          </View>

          <View className="mb-6">
            <Text className="text-blue-700 font-bold">Phone Number</Text>
            <TextInput
              placeholder="081245678972"
              className="w-full mt-3 rounded-lg bg-slate-50 px-3"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            className="w-full rounded-lg my-6 py-3 bg-blue-700 justify-center items-center"
            onPress={() => navigation.navigate('Profile')}>
            <Text className="text-white font-bold text-lg">Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
