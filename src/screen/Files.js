import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {dataList} from '../data/data';
import LinearGradient from 'react-native-linear-gradient';

import {ModalMenu} from './modal/ModalMenu';

export default function Files({navigation}) {
  const [modalMenu, setModalMenu] = useState(false);

  const handleCloseModal = () => {
    setModalMenu(false);
  };
  const renderItem = ({item}) => (
    <View className="w-full py-5 bg-white flex-row items-center justify-between px-4 border-b-2 border-b-slate-100 rounded-sm">
      <TouchableOpacity className="flex-row items-center">
        <View>{item.icon}</View>
        <Text className="text-sm font-medium ml-4">{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity className="rotate-90 w-6 h-6">
        <AntDesign name="ellipsis1" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-slate-100">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <ModalMenu show={modalMenu} onClose={handleCloseModal} />
        <ImageBackground
          source={require('../assets/images/Book_Pattern2.png')}
          resizeMode="cover"
          className=" h-44">
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['rgba(9, 136, 224, 0.45)', 'rgba(5, 74, 122, 0.85)']}
            className="px-6 py-6 h-44">
            <Text className="text-white text-2xl font-bold">File Manager</Text>
          </LinearGradient>
        </ImageBackground>
        <View className="px-5 py-5">
          <TouchableOpacity className="pb-5 flex-row items-center">
            <Text className="text-base text-stone-900 font-semibold pr-3">
              A - Z
            </Text>
            <AntDesign name="caretdown" size={16} className="bg-stone-900 " />
          </TouchableOpacity>

          <FlatList
            data={dataList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
      onPress={() => {setModalMenu(true)}}

      >
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#71C9EA', '#498AD7']}
          className="items-center justify-center rounded-full w-12 h-12 absolute bottom-3 right-5">
          <AntDesign name="plus" size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
