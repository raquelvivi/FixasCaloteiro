
import { View, StyleSheet, Dimensions, useColorScheme } from 'react-native';
import Row from './Row';
import { Compras } from '../types'

const deviceWidth = Dimensions.get('window').width;

export default function SelectCompra({ dado }: { dado: Compras } ) {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    const dataFormatada = new Date(dado.dia).toISOString().split('T')[0];


    return (

        <View style={[styles.ficha]}>
            <Row label="Valor Não pago" valor={String(dado.apagar)} />
            <Row label="Dia" valor={dataFormatada} />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Preço" valor={String(dado.total)} />

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
