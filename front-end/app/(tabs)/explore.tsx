import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchText.length >= 3) {
        fetchData(searchText); // Chama a função para buscar no banco
      } else {
        setResults([]); // Limpa os resultados se for menos de 3 letras
      }
    }, 500); // debounce de 500ms para evitar várias requisições

    return () => clearTimeout(delayDebounce); // limpa o timeout se o texto mudar antes dos 500ms
  }, [searchText]);

  const fetchData = async (query = '') => {
    try {
      // Exemplo de chamada para uma API ou banco de dados
      const response = await fetch(`https://sua-api.com/busca?query=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite para pesquisar..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.result}>{item.nome}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  result: { padding: 10, borderBottomWidth: 1, borderColor: '#eee' }
});

export default SearchComponent;
