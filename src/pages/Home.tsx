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
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkills, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkills() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkills
    }
    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
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
        onPress={handleAddNewSkills}
        text="Add"
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
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
    padding: Platform.OS === 'ios' ? 17 : 15,
    fontSize: 18,
    borderRadius: 10
  }
});