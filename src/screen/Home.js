import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {dataList} from '../data/data';

export default function Home({navigation}) {
  const renderItem = ({item}) => (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        paddingLeft: 14,
      }}>
      <TouchableOpacity>{item.icon}</TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Montserrat',
          marginLeft: 14,
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 17,
        }}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/ArsipkuWhite.png')}
            style={{width: 106, height: 26}}
          />
        </View>
        <View style={styles.categoryBox}>
          <View style={styles.categoryItems1}>
            <View style={styles.categoryItems2}>
              <TouchableOpacity>
                <AntDesign name="addfolder" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 11,
                color: 'blue',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: 10,
              }}>
              New Folder
            </Text>
          </View>

          <View style={styles.categoryItems1}>
            <View style={styles.categoryItems2}>
              <TouchableOpacity>
                <AntDesign name="addfile" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 11,
                color: 'blue',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: 10,
              }}>
              Add File
            </Text>
          </View>

          <View style={styles.categoryItems1}>
            <View style={styles.categoryItems2}>
              <TouchableOpacity>
                <AntDesign name="pdffile1" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 11,
                color: 'blue',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: 10,
              }}>
              Convert File
            </Text>
          </View>
        </View>
        <View style={styles.recomendBox}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.recomendText}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#0A0827',
                  fontWeight: '600',
                  marginRight: 215,
                }}>
                Recent Files
              </Text>
            </View>
          </View>
          <FlatList
            data={dataList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      {/* <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnFloating}
                onPress={() => navigation.navigate('AddDataHome')}>
                <Icon name="plus" size={25} color="#fff" />
            </TouchableOpacity> */}
    </View>
  );
}
