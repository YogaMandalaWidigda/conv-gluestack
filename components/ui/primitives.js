import React from 'react';

// Centralized wrapper that prefers Gluestack primitives and falls back to NativeBase / React Native.
let G = null;
try {
  // prefer scoped package first
  // eslint-disable-next-line global-require
  G = require('@gluestack-ui/core') || require('gluestack-ui');
} catch (e) {
  G = null;
}

let NB = null;
try {
  // eslint-disable-next-line global-require
  NB = require('native-base');
} catch (e) {
  NB = null;
}

const RN = require('react-native');

// Box: prefer Gluestack.Box -> NativeBase.Box -> View
const Box = (G && (G.Box || G.View)) || (NB && NB.Box) || ((props) => React.createElement(RN.View, props));

// Text
const Text = (G && (G.Text)) || (NB && NB.Text) || ((props) => React.createElement(RN.Text, props));

// Image
const Image = (G && (G.Image)) || (NB && NB.Image) || ((props) => React.createElement(RN.Image, props));

// Pressable
const Pressable = (G && (G.Pressable)) || (NB && NB.Pressable) || ((props) => React.createElement(RN.TouchableOpacity, props));

// Button
const Button = (G && (G.Button)) || (NB && NB.Button) || ((props) => React.createElement(RN.TouchableOpacity, props));

// Modal / Overlay
const Modal = (G && (G.Modal || G.Overlay)) || (NB && NB.Modal) || null;

const View = RN.View;

export { Box, Text, Image, Pressable, Button, Modal, View };
