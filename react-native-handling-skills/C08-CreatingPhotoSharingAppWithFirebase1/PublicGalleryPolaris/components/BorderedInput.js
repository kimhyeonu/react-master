import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

function BorderedInput({ hasMarginBottom, ...rest }, ref) {
  return (
    <TextInput
      style={[styles.input, hasMarginBottom && styles.margin]}
      {...rest}
      ref={ref}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

export default React.forwardRef(BorderedInput);
