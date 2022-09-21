import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native'

import { Button } from '../components/Button';
import React, { useEffect, useState } from 'react'
import { SkillsCard } from '../components/SkillsCard';

export function Home() {
  const [newSkills, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkills() {
    setMySkills(oldState => [...oldState, newSkills])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12)
      setGreeting('Good morning')
    else if (currentHour >= 12 && currentHour < 18)
      setGreeting('Good afternoon')
    else
      setGreeting('Good night')

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Yves</Text>
      <Text style={styles.greeting} >{greeting}</Text>

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

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillsCard skill={item} />
        )}
      />
    </View>
  )
}

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
  greeting: {
    color: '#fff',
    fontSize: 14
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