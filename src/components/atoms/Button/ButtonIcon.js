import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {IconBack} from '../../../assets';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && (
        <Image source={IconBack} style={styles.iconBack} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  iconBack: {width: 24, height: 24},
});
