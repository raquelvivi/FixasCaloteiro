
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';


export default function Row({ tipo = '', label = '', valor = "" }) {

    const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  const textColor = { color: isDarkMode ? '#000' : '#fff' };
    
  return (
    <View style={styles.cabecalho}>
      {tipo === 'botao' ? (
        <>
          <Link href="/cadastro">
            <Text style={[styles.texto, textColor]}>{label}:</Text>
          </Link>
          <Link href="/cadastro">
            <Text style={[styles.texto, textColor]}>{valor}</Text>
          </Link>
        </>
      ) : (
        <>
          <Text style={[styles.texto, textColor]}>{label}:</Text>
          <Text style={[styles.texto, textColor]}>{valor}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

    cabecalho: {

        flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
        alignItems: 'center',


    },
    texto: {
        margin: 5,
        fontSize: 17,

    },

});
