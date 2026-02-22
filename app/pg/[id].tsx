import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, useColorScheme, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';


import SelectCompra from '../../components/ComprasRegistradas';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import { Pessoa, Compras, ComprasComPessoas, ip } from '../../types'

import Pagamento from '../../components/Pagamento';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
import AnimatedLoader from 'react-native-animated-loader';

//192.168.18.52 

export default function TelaComLocalizacaoEGrafico() {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    const branco = 'rgba(255, 255, 255, 0.66)'

    const { id } = useLocalSearchParams();
    const pessoaId = Array.isArray(id) ? id[0] : id;

    const [view, setView] = useState(1);
    
    const [dadosComprasPuro, setDadosComprasPuro] = useState<Compras[]>([]);
    const [compras, setCompras] = useState<ComprasComPessoas| null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return; 

        const carregar = async () => {
            try {
                const resposta = await fetch(`${ip}/api/compra/${pessoaId}`);
                const usuario: ComprasComPessoas = await resposta.json();
                
                    setCompras(usuario);
                    // setDadosComprasPuro(usuario.compras);
                    console.log(dadosComprasPuro);
                
                
            } catch (error) {
                console.log("Erro ao buscar compras:", error);
            };
            setTimeout(() => {
                setLoading(false);
        },  2500);
        };

        carregar();
    }, [id]);

    


    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.comprasAntigas}>
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
                <Pagamento id={String(pessoaId)} tipo={view} dados={compras} ></Pagamento>
            )}

            
            
                    {dadosComprasPuro.length == 0 ? (
                        <View style={[styles.nadaAinda]}>
                            <Text style={{color: '#fff'}}>
                                Nada ainda
                            </Text>
                            <Image 
                                source={require('../../assets/images/melancia.webp')}
                                style={{ width: 150, height: 150 }}
                            />
                        </View>
                    
                ) : (dadosComprasPuro.map((item:Compras, index) => (
    
                    <View key={index}>
                     <View  style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', borderColor: isDarkMode ? branco : 'rgba(0, 0, 0, 0.47)'  }]}> 
    
                         <SelectCompra dado={item} />
                        
    
                     </View>
                     </View>
                ))
                )}

                
                

            </ScrollView>
  
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
    comprasAntigas: {
        // backgroundColor: 'blue',

        flex: 1

    },infor: {
    padding: 10,
    borderRadius: 20,
    margin: 10,
    
    borderWidth: 2,

  },
  overlay: {
    flex: 1,
    
    // backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outro:{
    zIndex: 6,
    position: 'relative',
    alignItems: 'center',
  },
  nadaAinda:{
    width: screenWidth,
    alignItems: "center",
    marginTop: 20
  }



});
