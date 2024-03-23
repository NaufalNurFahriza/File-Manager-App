import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {ModalNewFolder} from './modal/ModalNewFolder';
import {ModalAddFile} from './modal/ModalAddFile';
import RNFS from 'react-native-fs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ModalConvertFile } from './modal/ModalConvertFile';

export default function Home({navigation}) {
  const [currentPath, setCurrentPath] = useState(RNFS.DocumentDirectoryPath);
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [fileName, setFileName] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const [modalFolder, setModalFolder] = useState(false);
  const [modalFile, setModalFile] = useState(false);
  const [modalConvert, setModalConvert] = useState(false);

  useEffect(() => {
    getAllFolders(currentPath);
  }, [currentPath]);

  const getAllFolders = path => {
    RNFS.readDir(path)
      .then(result => {
        setFolders(result);
      })
      .catch(error => {
        console.error('Error reading folder:', error);
      });
  };

  const createFolder = () => {
    const newPath = `${currentPath}/${folderName}`;
    RNFS.mkdir(newPath)
      .then(() => {
        setFolderName('');
        getAllFolders(currentPath);
      })
      .catch(error => {
        console.error('Error creating folder:', error);
      });
  };

  const createFile = () => {
    const filePath = `${currentPath}/${fileName}`;
    const fileContent = 'This is a sample file content.';
    RNFS.writeFile(filePath, fileContent, 'utf8')
      .then(() => {
        getAllFolders(currentPath);
        console.log('File created successfully!');
      })
      .catch(error => {
        console.error('Error creating file:', error);
      });
  };

  const deleteDir = path => {
    RNFS.unlink(path)
      .then(() => {
        getAllFolders(currentPath);
      })
      .catch(error => {
        console.error('Error deleting folder:', error);
      });
  };

  const navigateToFolder = folder => {
    setCurrentPath(folder.path);
  };

  const navigateBack = () => {
    // Define the root directory path
    const rootDirectoryPath = '/data/user/0/com.file_manager_app';
    // Remove the last part of the current path to navigate to the parent directory
    const parentPath = currentPath.split('/').slice(0, -1).join('/');
    // Check if the parentPath is at the root directory
    if (parentPath === rootDirectoryPath) {
      // If at root directory, disable back navigation
      return;
    }
    // Otherwise, navigate to the parent directory
    setCurrentPath(parentPath);
  };

  const sortData = () => {
    // Buat salinan array folders agar tidak merubah state langsung
    const sortedFolders = [...folders];
    // Logika pengurutan data
    if (sortDirection === 'asc') {
      // Urutkan data dari A ke Z
      sortedFolders.sort((a, b) => a.name.localeCompare(b.name));
      // Ubah arah pengurutan menjadi descending
      setSortDirection('desc');
    } else {
      // Urutkan data dari Z ke A
      sortedFolders.sort((a, b) => b.name.localeCompare(a.name));
      // Ubah arah pengurutan menjadi ascending
      setSortDirection('asc');
    }
    // Perbarui state folders dengan data yang sudah diurutkan
    setFolders(sortedFolders);
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1024,
      maxHeight: 1024,
      quality: 1,
      includeBase64: false,
      saveToPhotos: true, // Menyimpan ke galeri setelah diambil
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.log(
          'Camera Error: ',
          response.errorCode,
          response.errorMessage,
        );
      } else {
        console.log('Camera Response: ', response);
        // Simpan gambar sebagai file .png
        saveImageAsPng(response.assets[0], currentPath);
      }
    });
  };

  const openImageLibrary = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1024,
      maxHeight: 1024,
      quality: 1,
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log(
          'ImagePicker Error: ',
          response.errorCode,
          response.errorMessage,
        );
      } else {
        console.log('ImagePicker Response: ', response);
        // Simpan gambar sebagai file .png
        saveImageAsPng(response.assets[0], currentPath);
      }
    });
  };

  const saveImageAsPng = async (asset, currentPath) => {
    const sourcePath = asset.uri; // Path dari gambar yang diambil
    const fileNamePrefix = 'IMG_'; // Awalan nama file
    const existingFiles = await RNFS.readdir(currentPath); // Mendapatkan daftar file yang ada
    let maxNumber = 0;

    // Mencari nomor file terbesar
    existingFiles.forEach(file => {
      if (file.startsWith(fileNamePrefix)) {
        const fileNumber = parseInt(
          file.replace(fileNamePrefix, '').replace('.png', ''),
        );
        if (!isNaN(fileNumber) && fileNumber > maxNumber) {
          maxNumber = fileNumber;
        }
      }
    });

    // Mendapatkan tanggal, bulan, tahun, dan detik dengan dua digit
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    // Membuat nama file baru dengan tanggal, bulan, tahun, dan detik dengan dua digit
    const newFileName = `${fileNamePrefix}${day}${month}${year}_${seconds}.png`;

    const destinationPath = `${currentPath}/${newFileName}`; // Path untuk menyimpan gambar sebagai .png

    try {
      // Membaca konten gambar
      const imageContent = await RNFS.readFile(sourcePath, 'base64');
      // Menyimpan konten gambar sebagai file .png
      await RNFS.writeFile(destinationPath, imageContent, 'base64');
      console.log('Image saved as .png:', destinationPath);
      // Perbarui daftar folder setelah menyimpan gambar
      getAllFolders(currentPath);
    } catch (error) {
      console.error('Error saving image as .png:', error);
    }
};

  const renderItem = ({item}) => (
    <View className="w-full py-5 bg-white flex-row items-center justify-between px-4 border-b-2 border-b-slate-100 rounded-sm">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => navigateToFolder(item)}
        onLongPress={() => {
          Alert.alert(
            `Delete ${item.isDirectory() ? 'Folder' : 'File'}`,
            `Are you sure you want to delete ${item.name}?`,
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Delete',
                onPress: () => deleteDir(item.path),
                style: 'destructive',
              },
            ],
          );
        }}>
        <View>
          {item.isDirectory() ? (
            <FontAwesome name="folder" size={24} color="#F8D775" />
          ) : item.name.toLowerCase().endsWith('.jpg') ||
            item.name.toLowerCase().endsWith('.png') ? (
            <FontAwesome name="image" size={24} color="#87CEEB" />
          ) : (
            <FontAwesome name="file-text" size={24} color="gray" />
          )}
        </View>
        <Text className="text-sm font-medium ml-4">{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-slate-100">
      <ModalNewFolder 
      show={modalFolder} 
      onClose={() => setModalFolder(false)}
      folderName={folderName}
      setFolderName={setFolderName}
      createFolder={createFolder}
      />

      <ModalAddFile
        show={modalFile}
        onClose={() => setModalFile(false)}
        openCamera={openCamera}
        openImageLibrary={openImageLibrary}
      />
      <ModalConvertFile
        show={modalConvert}
        onClose={() => setModalConvert(false)}
        // openCameraPDF={openCameraPDF}
        // openImageLibraryPDF={openImageLibraryPDF}
      />
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
          <View className="pb-5 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <TouchableOpacity className="px-4" onPress={navigateBack}>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  className="bg-stone-900"
                />
              </TouchableOpacity>
              <View style={{flexDirection: 'column'}}>
                <Text className="text-lg text-stone-900 capitalize">
                  {currentPath.split('/').pop()}
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={sortData}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text className="text-base text-stone-900 font-semibold pr-3">
                  {sortDirection === 'asc' ? 'Z - A' : 'A - Z'}
                </Text>
                <AntDesign
                  name={sortDirection === 'asc' ? 'caretdown' : 'caretup'}
                  size={16}
                  className="bg-stone-900"
                />
              </View>
            </TouchableOpacity>
          </View>

          <FlatList
            data={folders}
            renderItem={renderItem}
            keyExtractor={item => item.path}
          />
        </View>
      </ScrollView>
    </View>
  );
}
