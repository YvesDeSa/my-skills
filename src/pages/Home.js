import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native'

import { Button } from '../components/Button';
import React, { useState } from 'react'
import { SkillsCard } from '../components/SkillsCard';

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

      <Button
        activeOpacity={0.7}
        onPress={handleAddNewSkills}
        text="Add"
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {
        mySkills.map(skill => (
          <SkillsCard key={skill} skill={skill} />
        ))
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
  }
});