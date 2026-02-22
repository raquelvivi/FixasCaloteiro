
import React from 'react';
import { View, Image, StyleSheet, useColorScheme, TouchableOpacity, Text } from 'react-native';
import { Link } from "expo-router";
import Row from './Row';
import { Pessoa } from '../types'

export default function MaisInfor({ dado }: { dado: Pessoa | null }) {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';


    console.log(dado);
    if (dado) {
        return (

            <View style={[styles.MaisInfor, { backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.73)' : 'rgba(0, 0, 0, 0.7)' }]}>

                <View style={[styles.juntoImagem]}>

                    <Image source={require('../assets/images/rosto.jpeg')} style={[styles.img]} />
                    <View style={{ flexDirection: 'column' }}>
                        <Row label="Id" valor={`${dado.id}`} />
                        <Row label="Apelido" valor={dado.apelido} />

                    </View>
                </View>

                <Row label="Nome" valor={dado.nome} />
                <View style={[styles.cabecalho, { flex: 0.5, }]}>
                    <Row label="Endereco" valor={dado.logradouro} />
                    <Row label="N°" valor={`${dado.numero}`} />
                </View>
                <View style={[styles.cabecalho, { flex: 0.5, }]}>
                    <Row label="Total" valor={String(dado.total)} />
                    <Row label="Maximo" valor={`${dado.creditomax}`} />
                </View>
                    <Link href={{
                        pathname: '/pg/[id]',
                        params: { id: String(dado.id) }
                    }} style={[styles.button]}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </Link>
                    {/* <Link href={{
                        pathname: '/descricao/[id]',
                        params: { id: dado.id }
                    }} style={[styles.button]}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </Link> */}



            </View>

        );
    }
}

const styles = StyleSheet.create({

    cabecalho: {

        flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    button: {
        marginTop: 20,
        alignContent: "center",
        backgroundColor: "#4bf46784",
        padding: 5,
        margin: 10
    },
    buttonText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,

    },
    MaisInfor: {
        position: 'absolute',
        zIndex: 2,
        borderBottomWidth: 2,
        borderRadius: 20,
        padding: 10,
        width: "98%",
        maxWidth: "100%",
        marginTop: "60%",
        margin: "1%",
        borderWidth: 2,

    },
    juntoImagem: {
        flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
        alignItems: 'center',
    },
    img: {

        width: 100,
        height: 100,
        margin: 5,

    },

});
