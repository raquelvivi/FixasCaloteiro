
import { View, StyleSheet, useColorScheme } from 'react-native';
import Row from './Row';

export default function SelectPeople( { dado = {}} ) {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';


    return (

        <View>
            <Row label="Nome" valor={dado.nome} />
            <Row label="Apelido" valor={String(dado.apelido)} />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="50" />
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
});
