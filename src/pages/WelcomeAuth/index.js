import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const AcitionButton = ({desc, title}) => {
  return (
    <View style={{marginBottom: 43, maxWidth: 225}}>
      <Text
        style={{
          fontSize: 10,
          color: '#7E7E7E',
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 6,
        }}>
        {desc}
      </Text>
      <TouchableOpacity style={{backgroundColor: '#A55EEA', borderRadius: 25}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
            paddingVertical: 13,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const WelcomeAuth = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 219,
          height: 117,
          backgroundColor: '#A55EEA',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#A55EEA',
          marginBottom: 76,
        }}>
        Selamat datang di O-JOL
      </Text>
      <AcitionButton
        desc=" Silahkan masuk, jika anda sudah memiliki akun"
        title="Masuk"
      />
      <AcitionButton
        desc="atau Silahkan daftar jika anda belum memiliki akun"
        title="Daftar"
      />
    </View>
  );
};

export default WelcomeAuth;
