import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  ImageBackground,
} from 'react-native';
import RNFS from 'react-native-fs';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ModalMenu} from './modal/ModalMenu';

const Files = ({navigation}) => {
  const [currentPath, setCurrentPath] = useState(RNFS.DocumentDirectoryPath);
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [fileName, setFileName] = useState('');
  const [showAllPath, setShowAllPath] = useState(false);
  const [sortDirection, setSortDirection] = useState('asc');
  const [modalMenu, setModalMenu] = useState(false);

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
        setShowNewFolderInput(false);
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
    // Remove the last part of the current path to navigate to the parent directory
    const parentPath = currentPath.split('/').slice(0, -1).join('/');
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

  const handleCloseModal = () => {
    setModalMenu(false);
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
          ) : (
            <FontAwesome name="file-text" size={24} color="gray" />
          )}
        </View>
        <Text className="text-sm font-medium ml-4">{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
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
        }}
        className="w-6 h-6">
        <AntDesign name="delete" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-slate-100">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <ModalMenu show={modalMenu} onClose={handleCloseModal} navigation={navigation} />
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
                <TouchableOpacity onPress={() => setShowAllPath(!showAllPath)}>
                  <Text className="text-xs">
                    {showAllPath
                      ? currentPath
                      : currentPath.length > 20
                      ? currentPath.substr(0, 20) + '...'
                      : currentPath}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={sortData}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  className="text-base text-stone-900 font-semibold pr-3">
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
};


export default Files;
