import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

export function Home() {
  const [newSkills, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkills() {
    setMySkills(oldState => [...oldState, newSkills])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Yves</Text>

      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor="#555"
        onChangeText={setNewSkills}
      />

      <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddNewSkills} >
        <Text style={styles.buttonText} >Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill} >
            <Text style={styles.TextSkill} >{skill}</Text>
          </TouchableOpacity>
        )
        )
      }

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 80
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 12,
    fontSize: 18,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8
  },
  TextSkill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});