import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, useColorScheme, TouchableWithoutFeedback } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';


const screenWidth = Dimensions.get("window").width;

import { Pessoa, Compras, ComprasComPessoas, ip } from '../../types'

import Pagamento from '../../components/Pagamento';

//192.168.18.52 

export default function TelaComLocalizacaoEGrafico() {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    const branco = 'rgba(255, 255, 255, 0.66)'

    const { id } = useLocalSearchParams();

    const [view, setView] = useState(1);
    
    const [compras, setCompras] = useState<ComprasComPessoas | null>(null);




    useEffect(() => {

        if (compras == null) {

            (async () => {
                const resposta = await fetch(`http://${ip}/api/compra/${id}`);
                const usuario: ComprasComPessoas = await resposta.json();
                setCompras(usuario);
            })();

        }
    }, []);


    return (
        <View >
            {compras ? (
                <>
                    <Text style={[styles.titulo, { color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : "#000000" }]}>{compras.pessoa.nome}</Text>
                    {/* {compras.compras.map((c, i) => (
                        <Text style={{ color: isDarkMode ? branco : "#000000" }}  key={i}>Compra {c.dia} - {c.total}</Text>
                    ))} */}


                    <View style={[styles.conteine]}>

                        <TouchableWithoutFeedback onPress={() => { setView(1)  }}>
                            <Text style={[styles.nomeB, styles.button, { color: isDarkMode ? branco : "#000000" }]}>Pagar</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => { setView(2) }}>
                            <Text style={[styles.nomeB, styles.button, { color: isDarkMode ? branco : "#000000" }]}>Comprar</Text>
                        </TouchableWithoutFeedback>

                    </View>

                </>
            ) : (
                <Text>Carregando...</Text>
            )
            }


            {compras && (
                <Pagamento id={id} tipo={view} dados={compras} ></Pagamento>
            )}
            





        </View >
    );
}

const styles = StyleSheet.create({
    conteine: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 50,


    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
    },

    button: {

        backgroundColor: "#747474",
        width: screenWidth - 250,
        padding: 15,
        borderRadius: 10,
        marginBottom: 40

    },
    nomeB: {
        fontSize: 18,
        width: (screenWidth / 2) - 80,
        textAlign: "center",

    },



});
