
import { View, StyleSheet, Dimensions, useColorScheme } from 'react-native';
import Row from './Row';
import { Pessoa } from '../types'

const deviceWidth = Dimensions.get('window').width;

export default function SelectPeople({ dado }: { dado: Pessoa } ) {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';


    return (

        <View style={[styles.ficha]}>
            <Row label="Nome" valor={dado.nome} />
            <Row label="Apelido" valor={String(dado.apelido)} />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor={String(dado.total)} />
                <Row label="Maximo" valor={String(dado.creditomax)} />
            </View>

        </View>
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
    ficha:{
        width: deviceWidth - 50,
  
    }
});
