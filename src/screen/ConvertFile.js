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

export default function ConvertFile({navigation}) {
  return (
    <View className="flex-1 bg-slate-100">
      <View className="w-full h-16 bg-white flex-row self-center items-center pl-3 shadow-md">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#243bbb" />
        </TouchableOpacity>
        <Text className="ml-3 font-bold text-lg text-stone-600">
          Convert File
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View className="px-6 py-6 items-center">
          <Text className="text-stone-900 font-semibold text-lg text-center pt-10 pb-8">
            Choose Files
          </Text>

          <TouchableOpacity className="w-56 rounded-lg py-3 border-blue-700 border-2 justify-center items-center">
            <Text className="text-blue-700 font-semibold text-lg">
              Select File
            </Text>
          </TouchableOpacity>

          <View className="py-5">
            <Text className="text-stone-900 font-semibold text-base text-center">
              Or
            </Text>
          </View>

          <TouchableOpacity className="w-56 rounded-lg py-3 border-blue-700 border-2 justify-center items-center">
            <Text className="text-blue-700 font-semibold text-lg">
              Choose from Gallery
            </Text>
          </TouchableOpacity>

          <View className="bg-white px-4 py-6 w-80 my-9">
            <View className="flex-row justify-between py-3">
              <View className="flex-row items-center">
                <MaterialIcons
                  name="insert-drive-file"
                  size={24}
                  color="gray"
                />
                <Text className="pl-5 font-medium text-base text-gray-600">
                  Catatan.txt
                </Text>
              </View>
              <TouchableOpacity>
                <MaterialIcons name="close" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            className="rounded-lg my-6 py-3 bg-red-700 justify-center items-center w-80"
            onPress={() => navigation.navigate('Home')}>
            <Text className="text-white font-semibold text-lg">
              Convert to PDF
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
