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
import {ModalNewFolder} from './modal/ModalNewFolder';
import {ModalAddFile} from './modal/ModalAddFile';
import {useDispatch, useSelector} from 'react-redux';

export default function Home({navigation}) {
  // const dispatch = useDispatch();
  // const {storeData} = useSelector(state => state.home);
  // const {loginData, isLoggedIn} = useSelector(state => state.login);
  // console.log('test', loginData);
  // console.log('login userhome', isLoggedIn);
  const [modalFolder, setModalFolder] = useState(false);
  const [modalFile, setModalFile] = useState(false);

  const handleCloseModal = () => {
    setModalFolder(false) || setModalFile(false);
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
      <ModalNewFolder show={modalFolder} onClose={handleCloseModal} />
      <ModalAddFile show={modalFile} onClose={handleCloseModal} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <ImageBackground
          source={require('../assets/images/ArsipBg.png')}
          resizeMode="cover"
          className="px-6 py-6 h-44">
          <Image
            source={require('../assets/images/ArsipkuWhite.png')}
            style={{width: 106, height: 26}}
          />
        </ImageBackground>

        <View className="bg-slate-50 px-5 py-4 flex-row items-center justify-around">
          <View className="flex-col items-center">
            <TouchableOpacity
              onPress={() => {
                setModalFolder(true);
              }}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#F5C62C', '#FD5B4B']}
                className="items-center justify-center rounded-full w-[60px] h-[60px]">
                <AntDesign name="addfolder" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>

            <Text className="text-sm font-semibold text-stone-900 pt-4">
              New Folder
            </Text>
          </View>
          <View className="flex-col items-center">
            <TouchableOpacity
              onPress={() => {
                setModalFile(true);
              }}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#D8E474', '#62C654']}
                className="items-center justify-center rounded-full w-[60px] h-[60px]">
                <AntDesign name="addfile" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>

            <Text className="text-sm font-semibold text-stone-900 pt-4">
              Add File
            </Text>
          </View>
          <View className="flex-col items-center">
            <TouchableOpacity
              onPress={() => navigation.navigate('ConvertFile')}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#8FF8D4', '#16AAFB']}
                className="items-center justify-center rounded-full w-[60px] h-[60px]">
                <AntDesign name="pdffile1" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>

            <Text className="text-sm font-semibold text-stone-900 pt-4">
              Convert File
            </Text>
          </View>
        </View>

        <View className="px-5 py-5">
          <View className="pb-5">
            <Text className="text-base text-stone-900 font-semibold">
              Recent Files
            </Text>
          </View>
          <FlatList
            data={dataList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
