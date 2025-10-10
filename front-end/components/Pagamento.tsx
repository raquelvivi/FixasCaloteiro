import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, useColorScheme, TextInput } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const screenWidth = Dimensions.get("window").width;

export default function Pagamento({ id, tipo }: { id: String[] | String, tipo: number }) {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    const branco = 'rgba(255, 255, 255, 0.66)'

    const [datapaga, setDatapaga] = useState("");

    const [quem, setQuem] = useState(true);

    useEffect(() => {
        if (tipo === 1) {
            setQuem(true);
        } else {
            setQuem(false);
        }
    }, [tipo]); // só roda quando 'tipo' muda




    return (

        <>

            {quem ? (
                <View style={[styles.button, styles.pagar]}>
                    <Text style={[styles.tituloC, { color: isDarkMode ? branco : "#000000" }]}> Novo Pagamento </Text>


                    <View style={styles.row}>
                        <Text style={[styles.label, { color: isDarkMode ? branco : '#000' }]}>Pagamento:</Text>

                        <TextInput
                            placeholder="Valor do Pagamento"
                            value={datapaga}
                            onChangeText={setDatapaga}
                            keyboardType="numeric"
                            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
                            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

                        />
                    </View>



                    <Text style={[styles.total, { color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)', backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.6)' }]}>Total: </Text>
                    <Text style={[styles.salvar, { color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.88)', backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.55)' : 'rgba(0,0,0,1)' }]}>Salvar</Text>
                </View>
            )
                : (
                    <View style={[styles.button, styles.comprar]}>
                        <Text style={[styles.tituloC, { color: isDarkMode ? branco : "#000000" }]}> Nova Compra </Text>


                        <View style={styles.row}>
                            <Text style={[styles.label, { color: isDarkMode ? branco : '#000' }]}>Valor:</Text>

                            <TextInput
                                placeholder="Valor da Compra"
                                value={datapaga}
                                onChangeText={setDatapaga}
                                keyboardType="numeric"
                                placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
                                style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

                            />
                        </View>

                        <View style={styles.rowC }>
                            <Text style={[styles.imagem, { color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.6)', backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.6)': 'rgba(0, 0, 0, 1)'  }]}>Tirar Foto </Text>
                            <Text style={[styles.total, { color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)', backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.6)' }]}>Total: </Text>

                        </View>

                        
                        <Text style={[styles.salvar, { color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.88)', backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.55)' : 'rgba(0,0,0,1)' }]}>Salvar</Text>
                    </View>
                )}

        </>

    );
}

const styles = StyleSheet.create({

    input: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        width: 200,
        textAlign: 'left',
        height: 45,
        fontSize: 15,


    },
    label: {
        marginBottom: -10,
        fontSize: 15,
    },
    row: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: "space-around",
        marginBottom: 40,
        marginTop: 40,


    },
    rowC:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: "space-around",
    },


    total: {
        width: 100,
        padding: 5,
        borderRadius: 5,
        fontSize: 15,
        // marginLeft: 20
    },
    salvar: {
        textAlign: "center",
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 10,
        padding: 5,
        fontSize: 15

    },
    pagar: {
        width: screenWidth - 20,
        marginLeft: 10,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#747474",
        borderRadius: 10,

    },
    comprar: {
        width: screenWidth - 20,
        marginLeft: 10,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#747474",
        borderRadius: 10,
    },
    tituloC: {
        textAlign: "center",
        fontSize: 20,
    },
    imagem:{
        width: 100,
        padding: 5,
        borderRadius: 5,
        fontSize: 15,
        textAlign: 'center',
    },

});
