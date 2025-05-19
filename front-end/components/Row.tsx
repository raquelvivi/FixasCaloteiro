
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';


export default function Row({ label = '', valor = ""}) {
 
      const theme = useColorScheme();
      const isDarkMode = theme === 'dark';
    return (

        <View style={styles.cabecalho}>
            <Text style={[styles.texto, { color: isDarkMode ? '#000' : '#fff' }]}>{label}:</Text> <Text style={[styles.texto, { color: isDarkMode ? '#000' : '#fff' }]}>{valor}</Text>
        </View>

    );
}

const styles = StyleSheet.create({

    cabecalho: {

        flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
        alignItems: 'center',
        

    },
    texto:{
        margin: 5,
        fontSize: 17,
        
    },
    
});
