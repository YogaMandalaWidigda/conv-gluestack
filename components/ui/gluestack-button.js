import React from 'react';
import { Box, Pressable, Text } from './primitives';

export default function GluestackButton({ children, onPress, variant = 'primary', size = 'md', style, ...rest }) {
  const content = children ?? rest.text ?? rest.label ?? '';

  const variants = {
    primary: { bg: 'red.700', textColor: 'white' },
    secondary: { bg: 'gray.300', textColor: 'black' },
    ghost: { bg: 'transparent', textColor: 'red.700' },
  };

  const sizes = {
    sm: { px: 3, py: 2, fontSize: 'sm' },
    md: { px: 4, py: 3, fontSize: 'md' },
    lg: { px: 5, py: 4, fontSize: 'lg' },
  };

  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  return (
    <Pressable onPress={onPress} accessibilityRole="button" {...rest}>
      <Box bg={v.bg} px={s.px} py={s.py} rounded="full" alignItems="center" style={style}>
        <Text color={v.textColor} fontSize={s.fontSize} fontWeight="bold" textTransform="uppercase">
          {content}
        </Text>
      </Box>
    </Pressable>
  );
}
