import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const graphqlEndpoint = 'https://rickandmortyapi.com/graphql';

      const query = `
        query {
          characters {
            results {
              id
              name
              image
            }
          }
        }
      `;

      try {
        const response = await axios.post(graphqlEndpoint, { query });
        const fetchedCharacters = response.data.data.characters.results;

        setCharacters(fetchedCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCharacterPress = (character) => {
    // Navegar para a tela de detalhes com o ID do personagem selecionado
    navigation.navigate('CharacterDetail', { characterId: character.id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.characterItem} onPress={() => handleCharacterPress(item)}>
      <Image source={{ uri: item.image }} style={styles.characterImage} />
      <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  characterItem: {
    marginBottom: 16,
    alignItems: 'center',
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CharacterList;
