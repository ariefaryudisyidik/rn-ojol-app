import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Input} from '../../components/atoms';
import {colors} from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <Image source={IconBack} style={styles.iconBack} />
      <IllustrationRegister
        width={148}
        height={92}
        style={styles.illustration}
      />
      <Text style={styles.text.desc}>
        Mohon mengisi beberapa data untuk proses daftar anda
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="nama lengkap" />
      <View style={styles.space(32)} />
      <Input placeholder="email" />
      <View style={styles.space(32)} />
      <Input placeholder="password" />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    page: {flex: 1, padding: 20, backgroundColor: 'white'},
  },
  iconBack: {width: 24, height: 24},
  illustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
});
