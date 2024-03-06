import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/images/splashLogo.png')}
        style={{width: 150, height: 174, resizeMode: 'contain'}}
      />
    </View>
  );
};
export default Splash;
