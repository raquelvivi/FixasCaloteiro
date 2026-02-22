import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
// import { LineChart, ProgressChart } from "react-native-chart-kit";
// import { useLocalSearchParams, useNavigation } from "expo-router";
// import Row from "@/components/Row";
// import Feather from "react-native-vector-icons/Feather";
// import AnimatedLoader from "react-native-animated-loader";

// import { useFocusEffect } from "@react-navigation/native";

// import MaisInfor from '../../components/MaisInfor';
// import SelectPeople from '../../components/SelectPeople';
// import { Pessoa } from '../../types'

// export const mudou = 0;
// import { API_URL } from "../../config";
// const url = API_URL;

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      data: [2, 4, 3, 8, 9, 6],
    },
  ],
};

const chartConfig = {
  //   backgroundGradientFrom: "#15d76c",
  //   backgroundGradientTo: "#00863cff",
  decimalPlaces: 0, //arredonda os numeros na culuna
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

export default function dashbord() {
  return (
    <View>
      <View style={styles.total}>
        <Text>Total de Fichas:</Text>
        <Text>Valor Total das Fichas:</Text>
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

      <View style={styles.container}>
        <View style={styles.meses}>
          <Text>Mes 4</Text>
        </View>
        <View style={styles.meses}>
          <Text>Mes 5</Text>
        </View>
      </View>
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
    width: screenWidth - 20,
  },
  container: {
    flexDirection: "row",
  },
  meses: {
    backgroundColor: "rgba(255, 255, 255, 0.66)",
    width: 100,
  },
});
