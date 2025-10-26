import React from 'react';
import { Box, Pressable, Image, Text } from './primitives';

export default function GluestackHeader({ drawer }) {
  return (
    <Box bg="red.700" px={4} py={3} flexDirection="row" justifyContent="space-between" alignItems="center">
      <Pressable onPress={() => drawer?.current?.openDrawer()}>
        <Image source={require('../../assets/menu.png')} alt="menu" />
      </Pressable>

      <Box flexDirection="row" alignItems="center" gap={8}>
        <Image source={require('../../assets/facebook.png')} alt="facebook" size="9" resizeMode="contain" />
        <Image source={require('../../assets/youtube.png')} alt="youtube" size="9" resizeMode="contain" />
        <Image source={require('../../assets/twitter.png')} alt="twitter" size="9" resizeMode="contain" />
        <Image source={require('../../assets/search.png')} alt="search" size="9" resizeMode="contain" />
      </Box>
    </Box>
  );
}
