import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Style';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={styles.header}>
        <View style={styles.photoBag}>
  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
    <Image
      source={require('../assets/images/photoProfile.png')}
      style={{
        width: 45,
        height: 45,
        resizeMode: 'contain',
      }}
    />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Files')}>
    <Image
      source={require('../assets/images/photoProfile.png')}
      style={{
        width: 24,
        height: 24,
        resizeMode: 'contain',
      }}
    />
  </TouchableOpacity>
</View>


          <View style={styles.textHeader}>
            <Text
              style={{
                fontSize: 15,
                color: '#034262',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '500',
                marginVertical: 5,
              }}>
              Hello Fahri!
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#0A0827',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '700',
              }}>
              Ingin merawat dan perbaiki sepatumu? cari disini
            </Text>
          </View>

          <View style={styles.searchFilter}>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 10,
                width: 275,
                height: 45,
                backgroundColor: '#F6F8FF',
                borderRadius: 13,
              }}>
              <Image
                source={require('../assets/images/photoProfile.png')}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                height: 45,
                backgroundColor: '#F6F8FF',
                borderRadius: 13,
              }}>
              <Image
                source={require('../assets/images/photoProfile.png')}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.categoryBox}>
          <View style={styles.categoryItems}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/photoProfile.png')}
                style={{
                  width: 45,
                  height: 45,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 9,
                  color: '#BB2427',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Sepatu
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryItems}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/photoProfile.png')}
                style={{
                  width: 45,
                  height: 45,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 9,
                  color: '#BB2427',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Jaket
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryItems}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/photoProfile.png')}
                style={{
                  width: 45,
                  height: 45,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 9,
                  color: '#BB2427',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Tas
              </Text>
            </TouchableOpacity>
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
                  marginRight: 75,
                }}>
                Rekomendasi Terdekat
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#E64C3C',
                  fontWeight: '500',
                  marginLeft: 75,
                }}>
                View All
              </Text>
            </View>
          </View>
          <View style={styles.boxList}></View>
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
