import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  TextInput,
  Alert,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

const screenWidth = Dimensions.get("window").width;

import { ComprasComPessoas, Compras, ip } from "../types";

function calculo(d: ComprasComPessoas) {
  let total = 0;

  for (let v = 0; v < d.compras.length; v++) {
    total = total + d.compras[v].apagar;
  }

  return total;
}

async function Pagar(
  valor: number,
  compras: Compras[],
  total: number,
  id: string
) {
  try {
    const response = await fetch(`http://${ip}/api/compra/grande/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pago: valor,
      }),
    });

    console.log("salvo no servidor com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar no servidor:", error);
  }
}

async function Comprar(list: {}) {
  //c192.168.18.52

  if (list) {
    if (list.total) {
      try {
        const response = await fetch(`http://${ip}/api/compra`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(list),
        });

        console.log("salvo no servidor com sucesso!");
      } catch (error) {
        console.error("Erro ao salvar no servidor:", error);
      }
    } else {
      Alert.alert(
        "Campo Vazio",
        "Porfavor Adicione um valor antes de salvar a compra"
      );
    }
  }
}

export default function Pagamento({
  id,
  tipo,
  dados,
}: {
  id: String[] | String;
  tipo: number;
  dados: ComprasComPessoas;
}) {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";
  const branco = "rgba(255, 255, 255, 0.66)";

  const [comp, setComp] = useState<number>(0);
  const [paga, setPaga] = useState<number>(0);

  const [quem, setQuem] = useState(true);
  const [total, setTotal] = useState<number>(0); // total de divida do cliente

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tipo === 1) {
      setQuem(true);
    } else {
      setQuem(false);
    }

    if (dados) {
      setTotal(calculo(dados)); // total de divida do cliente
    }
  }, [tipo]); // só roda quando 'tipo' muda, ou seja, quando clicam em um botao diferente da pagina ID

  const hoje = new Date();
  const dataFormatada = hoje.toISOString().split("T")[0];

  let list = {
    //tente com let depois
    dia: dataFormatada,
    total: comp,
    apagar: comp,
    tipopag: "Fiado",
    idfuncio: 12,
    idfixa: id,
  };

  return (
    <>
      {quem ? (
        <View style={[styles.pagar]}>
          <Text
            style={[styles.tituloC, { color: isDarkMode ? branco : "#000000" }]}
          >
            {" "}
            Novo Pagamento{" "}
          </Text>

          <View style={styles.row}>
            <Text
              style={[styles.label, { color: isDarkMode ? branco : "#000" }]}
            >
              Pagamento:
            </Text>

            <TextInput // variavel paga controla o input de pagamento
              placeholder="Valor do Pagamento"
              value={paga.toString()}
              onChangeText={(text) => setPaga(Number(text) || 0)}
              keyboardType="numeric"
              maxLength={3} //caracteres maximos
              placeholderTextColor={
                isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"
              }
              style={[
                styles.input,
                {
                  borderBottomColor: isDarkMode
                    ? "rgba(255,255,255,0.7)"
                    : "rgba(0,0,0,1)",
                  color: isDarkMode ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
                },
              ]}
            />
          </View>

          {/* valor de analise, total que ficara depois de pago */}
          <Text
            style={[
              styles.total,
              {
                color: isDarkMode
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(0, 0, 0, 0.6)",
                backgroundColor: isDarkMode
                  ? "rgba(0, 0, 0, 1)"
                  : "rgba(255, 255, 255, 0.6)",
              },
            ]}
          >
            Total: {total - paga}
          </Text>

          <TouchableOpacity
            disabled={loading}
            onPress={async () => {
              setLoading(true);
              if (paga <= total && paga != null && paga != 0) {
                try {
                  let vivi = await Pagar(paga, dados.compras, total, id);
                  setTotal(total - paga), setPaga(0);
                  console.log("deu certo? ", vivi);
                } catch (error) {
                  Alert.alert("Erro", "Falha na comunicação com o servidor.");
                } finally {
                  setLoading(false); //libera o botão idependente do sucesso
                }
              } else {
                if (paga > total) {
                  Alert.alert(
                    "Pagamento grande",
                    `O valor estrapola o total de dividas do cliente dessa forma o saldo vai ser quitado e ${
                      paga - total
                    } reais deve ser devolvido`
                  );
                } else {
                  Alert.alert(
                    "Valor não inserido",
                    `Porfavor adicione um valor a ser processado`
                  );
                }
              }
            }}
          >
            <Text
              style={[
                styles.salvar,
                {
                  color: isDarkMode
                    ? "rgba(0, 0, 0, 1)"
                    : "rgba(255, 255, 255, 0.88)",
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.55)"
                    : "rgba(0,0,0,1)",
                },
                loading && { backgroundColor: "#555" },
              ]}
            >
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.comprar]}>
          <Text
            style={[styles.tituloC, { color: isDarkMode ? branco : "#000000" }]}
          >
            {" "}
            Nova Compra{" "}
          </Text>

          <View style={styles.row}>
            <Text
              style={[styles.label, { color: isDarkMode ? branco : "#000" }]}
            >
              Valor:
            </Text>

            <TextInput
              placeholder="Valor da Compra"
              value={comp.toString()}
              onChangeText={(text) => {
                // permite ponto e vírgula no meio
                const valor = text.replace(",", ".");
                setComp(parseFloat(valor) || 0);
              }}
              keyboardType="decimal-pad" // <-- aceita ponto e vírgula
              maxLength={3} //caracteres maximos
              placeholderTextColor={
                isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"
              }
              style={[
                styles.input,
                {
                  borderBottomColor: isDarkMode
                    ? "rgba(255,255,255,0.7)"
                    : "rgba(0,0,0,1)",
                  color: isDarkMode ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
                },
              ]}
            />
          </View>

          <View style={styles.rowC}>
            <Text
              style={[
                styles.imagem,
                {
                  color: isDarkMode
                    ? "rgba(0, 0, 0, 1)"
                    : "rgba(255, 255, 255, 0.6)",
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(0, 0, 0, 1)",
                },
              ]}
            >
              Tirar Foto{" "}
            </Text>
            <Text
              style={[
                styles.total,
                {
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(0, 0, 0, 0.6)",
                  backgroundColor: isDarkMode
                    ? "rgba(0, 0, 0, 1)"
                    : "rgba(255, 255, 255, 0.6)",
                },
              ]}
            >
              Total: {total + comp}{" "}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (total + comp < dados.pessoa.creditomax) {
                Comprar(list), setTotal(total + comp), setComp(0);
              } else {
                Alert.alert(
                  "Compra muito grande",
                  "Não foi possivel realizar a compra pois o valor inserido ultrapassa o permitido"
                );
              }
            }}
          >
            <Text
              style={[
                styles.salvar,
                {
                  color: isDarkMode
                    ? "rgba(0, 0, 0, 1)"
                    : "rgba(255, 255, 255, 0.88)",
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.55)"
                    : "rgba(0,0,0,1)",
                },
              ]}
            >
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    width: 200,
    textAlign: "left",
    height: 45,
    fontSize: 15,
  },
  label: {
    marginBottom: -10,
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 40,
    marginTop: 40,
  },
  rowC: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 15,
  },
  disabledButton: {
    textAlign: "center",
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10,
    padding: 5,
    fontSize: 15,
    backgroundColor: "rgba(85, 93, 99, 1)",
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
  imagem: {
    width: 100,
    padding: 5,
    borderRadius: 5,
    fontSize: 15,
    textAlign: "center",
  },
});
