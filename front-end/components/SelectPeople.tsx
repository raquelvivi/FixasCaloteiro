
import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import Row from './Row';



export default function MaisInfor({ dados = '' }) {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    const [mostrarView, setMostrarView] = useState(false);

    return (

        <TouchableOpacity onPress={() => setMostrarView(true)} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>
            <Row label="Nome" valor="Vivi Dantas" />
            <Row label="Apelido" valor="Irmã de nega" />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="200" />
                <Row label="Maximo" valor="150" />
            </View>
        </TouchableOpacity>



    );
}

const styles = StyleSheet.create({

    cabecalho: {

        flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    infor: {
        padding: 10,
        borderRadius: 20,
        margin: 10,
    
      },
});
