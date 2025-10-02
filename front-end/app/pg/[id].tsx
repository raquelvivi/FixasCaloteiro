import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, useColorScheme } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';


const screenWidth = Dimensions.get("window").width;

import { Pessoa, Compras, ComprasComPessoas } from '../../types'



export default function TelaComLocalizacaoEGrafico() {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    const branco = 'rgba(255, 255, 255, 0.57)'

    const { id } = useLocalSearchParams();

    const [dados, setDados] = useState<Pessoa | null>(null);
    const [compras, setCompras] = useState<ComprasComPessoas | null>(null);


    useEffect(() => {

        if (dados == null) {

            (async () => {
                const resposta = await fetch(`http://192.168.18.52:8080/api/compra/${id}`);
                const usuario: ComprasComPessoas = await resposta.json();
                setCompras(usuario);

                
                

            })();

            // (async () => {       compras
            //     const resposta = await fetch(`http://192.168.18.52:8080/api/fixa/${id}`);
            //     const usuario = await resposta.json();
            //     setcompras(usuario);
            // })();

        }

        if (compras?.pessoas) {
            console.log("Nome da pessoa:", compras.pessoas);
        }


    }, []);


    return (
        <View >
            {compras ? (
                <>
                    <Text>Pessoa: {compras.pessoa.nome}</Text>
                    {compras.compras.map((c, i) => (
                        <Text key={i}>Compra {c.dia} - {c.total}</Text>
                    ))}
                </>
            ) : (
                <Text>Carregando...</Text>
            )}


        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        color: "#000"
    }
});
