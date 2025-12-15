
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';


export default function Row({ tipo = '', label = '', valor = "" }) {

  const branco = 'rgba(255, 255, 255, 0.74)'
    const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  const textColor = { color: isDarkMode ? branco : '#000'  };

  //, { color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)' }
    
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

        flexDirection: 'row',
        alignItems: 'center',


    },
    texto: {
        margin: 5,
        fontSize: 17,

    },

});
