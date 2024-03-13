import React from 'react';
import {View, Modal, TouchableOpacity, Text, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ModalMenu = ({show, onClose, navigation}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View className=" flex flex-1 justify-end bg-black/[.6]">
        <View className="absolute bottom-16 right-5 py-3">
        <View className="flex-col items-center justify-around">

            <TouchableOpacity 
            onPress={() => {setModalFolder(true)}}
            >
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#F5C62C', '#FD5B4B']}
                className="items-center justify-center rounded-full w-12 h-12 mb-4">
                <AntDesign name="addfolder" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => {setModalFile(true)}}
            >
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#D8E474', '#62C654']}
                className="items-center justify-center rounded-full w-12 h-12 mb-4">
                <AntDesign name="addfile" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ConvertFile')}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#8FF8D4', '#16AAFB']}
                className="items-center justify-center rounded-full w-12 h-12 mb-4">
                <AntDesign name="pdffile1" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>
        </View>
      
          <TouchableOpacity onPress={onClose}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#71C9EA', '#498AD7']}
              className="items-center justify-center rounded-full w-12 h-12 ">
              <AntDesign name="close" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
