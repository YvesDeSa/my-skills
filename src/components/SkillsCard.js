import React from "react";

import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function SkillsCard({ skill }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} >{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8
  }
})