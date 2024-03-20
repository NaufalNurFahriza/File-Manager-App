import React from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const ModalAddPhoto = ({ show, onClose, setImgProfile, dispatch, navigation }) => {
  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    try {
      const result = await launchCamera(options);
      console.log(result);
      if (!result.cancelled) {
        setImgProfile(result.uri); // Update imgProfile dengan URI gambar dari kamera
        tambahData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openImageLibrary = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };
  
    try {
      const result = await launchImageLibrary(options);
      if (!result.cancelled) {
        setImgProfile(result.uri); // Update imgProfile dengan URI gambar dari galeri
        tambahData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tambahData = () => {
    const data = {
      imgProfile: setImgProfile ? setImgProfile :
        'https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg',
    };
    dispatch({type: 'ADD_DATA_LOGIN', data: data});
    navigation.replace('bottom');
  };

  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View className="flex flex-1 justify-end items-center bg-black/[.8] p-4">
        <View className="w-full bg-slate-100 rounded-lg">
          <View className="w-full py-4">
            <Text className="text-center text-stone-900 text-base font-medium">
              Select File Photo
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              openCamera();
              onClose();
            }}
            className="w-full border-y-[1px] border-gray-300 py-3">
            <Text className="text-center text-blue-600 text-lg font-semibold my-2">
              Take Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openImageLibrary();
              onClose();
            }}
            className="w-full py-4">
            <Text className="text-center text-blue-600 text-lg font-semibold my-2">
              Choose from Gallery
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full bg-slate-100 rounded-lg my-5 py-3">
          <TouchableOpacity onPress={onClose}>
            <Text className="text-center text-blue-600 text-lg font-semibold my-2">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
