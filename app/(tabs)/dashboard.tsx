import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

import { ip } from "../../types";


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      data: [2, 4, 3, 8, 9, 6],
    },
  ],
};

///api/compra/dashboard

const chartConfig = {
  backgroundGradientFrom: "#15d76c",
  backgroundGradientTo: "#00863cff",
  decimalPlaces: 0, //arredonda os numeros na culuna
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

export default function dashbord() {

  const [dados, setDados] = useState({});

  useEffect(() => {
   
    fetch(`${ip}/api/compra/dashboard`)
    .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDados(data); //dados e result recebem as fixas
          console.log(data);
        } else if (data) {
          console.log(data);
          setDados([data]); // transforma objeto único em array
        }
        });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.total}>
        <Text style={styles.Text}>Total de Fichas: {dados[0]?.total_fixas}</Text>
        <Text style={styles.Text}>Valor Total das Fichas: {dados[0]?.dividasTotais}</Text>
      </View>
      <View style={styles.graficoContainer}>
        {/* <LineChart
          data={data} //conteudo
          width={screenWidth - 20} //tamanho
          height={220} //altura
          chartConfig={chartConfig} //styles
          bezier //arredonda a linha principal
          withInnerLines={false} //tira as linhas pontilhadas
          //withDots={true} // meche nos pontos
          fromZero={true} // os numeros da esquerda começam em zero
        /> */}
      </View>

      {/* <View style={styles.container}>
        <View style={styles.meses}>
          <Text style={styles.Text}>Mes 4</Text>
        </View>
        <View style={styles.meses}>
          <Text style={styles.Text}>Mes 5</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  graficoContainer: {
    marginTop: 40,
    borderRadius: 16,
  },
  total: {
    backgroundColor: "rgba(255, 255, 255, 0.66)",
    marginTop: 50,
    width: screenWidth - 100,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  Text:{
    fontSize: 20,
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: screenWidth - 20,
  },
  meses: {
    backgroundColor: "rgba(255, 255, 255, 0.66)",
    width: 100,
  },
});
