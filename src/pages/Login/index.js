import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IllustrationLogin} from '../../assets';
import {Button, Input} from '../../components/atoms';
import {setForm} from '../../redux';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  const {form} = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('Data yang dikirim: ', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IllustrationLogin
          width={148}
          height={92}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Silahkan mengisi data anda, untuk masuk ke aplikasi O-JOL
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(32)} />
        <Input
          placeholder="password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(80)} />
        <Button title="Masuk" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    page: {flex: 1, padding: 20, backgroundColor: 'white'},
  },
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
