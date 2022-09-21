import React from "react";

import { Text, TouchableOpacity, TouchableHighlightProps, StyleSheet } from 'react-native'

interface ButtonProps extends TouchableHighlightProps {
  text: string
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7} style={styles.button}  {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
})