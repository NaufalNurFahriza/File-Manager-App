import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {dataList} from '../data/data';

export default function Files({navigation}) {
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
        <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: '600',
              }}>
              File Manager
            </Text>
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
                  marginRight: 10,
                }}>
                A - Z 
              </Text>
              <AntDesign name="caretdown" size={16} color="#0A0827" />
            </View>
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
