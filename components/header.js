import React from 'react';
import { HStack, Pressable, Image, Box } from 'native-base';

const Header = (props) => {
  return (
    <HStack bg="red.700" justifyContent="space-between" alignItems="center" p={4}>
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Image source={require('../assets/menu.png')} alt="menu" />
      </Pressable>

      <HStack alignItems="center" space={2}>
        <Image source={require('../assets/facebook.png')} alt="facebook" size="9" resizeMode="contain" />
        <Image source={require('../assets/youtube.png')} alt="youtube" size="9" resizeMode="contain" />
        <Image source={require('../assets/twitter.png')} alt="twitter" size="9" resizeMode="contain" />
        <Image source={require('../assets/search.png')} alt="search" size="9" resizeMode="contain" />
      </HStack>
    </HStack>
  );
};

export default Header;


