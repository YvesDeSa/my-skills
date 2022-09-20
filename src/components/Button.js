import React from "react";

import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Button({ text, ...rest }) {
  return (
    <TouchableOpacity style={styles.button}  {...rest}>
      <Text style={styles.buttonText} >{text}</Text>
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