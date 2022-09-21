import React from "react";

import { Text, TouchableOpacity, StyleSheet, TouchableHighlightProps } from 'react-native'

interface SkillCardProps extends TouchableHighlightProps {
  skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
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