import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios, { AxiosError } from 'axios';

const CharacterDetailScreen = ({ route }) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const graphqlEndpoint = 'https://rickandmortyapi.com/graphql';

      const query = `
        query GetCharacterDetails($characterId: ID!) {
          character(id: $characterId) {
            id
            name
            image
            status
            species
          }
        }
      `;

      try {
        const response = await axios.post(graphqlEndpoint, {
          query,
          variables: { characterId },
        });

        console.log('GraphQL Response:', response.data);

        if (response.data.errors) {
          // Se houver erros na resposta GraphQL, registre-os e pare a execução
          setError(response.data.errors);
          return;
        }

        const characterDetails = response.data.data.character;
        setCharacter(characterDetails);
      } catch (error) {
        // Se houver um erro na solicitação (status 400, por exemplo), registre o erro
        console.error('GraphQL Request Error:', error);

        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          console.error('Axios Response:', axiosError.response?.data);
        }

        setError(error.message || 'Error fetching character details');
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.characterImage} />
      <Text style={styles.characterName}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Species: {character.species}</Text>
      {/* Adicione mais informações conforme necessário */}
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
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default CharacterDetailScreen;
