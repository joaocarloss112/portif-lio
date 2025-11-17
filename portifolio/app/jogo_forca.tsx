import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const PALAVRAS = [
  "SPORT", "VITORIA", "FLAMENGO", "CRUZEIRO", "INTERNACIONAL", "TUPI",
  "CRICIUMA", "HOLANDA", "BRASIL", "BELGICA", "CRB", "CSA", "AMERICA DE PERNAMBUCO",
  "BRUSQUE", "FIGUEIRENSE", "CORITIBA", "ATHLETICO PARANAENSE", "SAO PAULO",
  "CORINTHIANS", "PALMEIRAS", "SANTOS", "FLUMINENSE", "VASCO DA GAMA", "BOTAFOGO",
  "GREMIO", "SULAMERICA", "ARGENTINA", "ALEMANHA", "FRANCA", "ITALIA",
  "ESPANHA", "INGLATERRA", "PORTUGAL", "URUGUAI", "CHILE", "COLOMBIA",
  "EQUADOR", "PARAGUAI", "BOLIVIA", "PERU", "VENEZUELA"
];

export default function Jogo() {
  const [palavra, setPalavra] = useState<string | null>(null);
  const [letrasCertas, setLetrasCertas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const maxTentativas = 6;

  useEffect(() => {
    const p = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(p.toUpperCase());
  }, []);

  const verificarLetra = (letra: string) => {
    if (!palavra) return;

    letra = letra.toUpperCase();
    if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCertas((prev) => [...prev, letra]);
    } else {
      setLetrasErradas((prev) => [...prev, letra]);
    }
  };

  if (!palavra) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Carregando jogo...</Text>
      </View>
    );
  }

  const palavraCompleta = palavra
    .split("")
    .map((letra) =>
      letra === " "
        ? " "
        : letrasCertas.includes(letra)
        ? letra
        : "_"
    )
    .join(" ");

  const venceu = !palavraCompleta.includes("_");
  const perdeu = letrasErradas.length >= maxTentativas;

  const reiniciar = () => {
    const novo = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(novo.toUpperCase());
    setLetrasCertas([]);
    setLetrasErradas([]);
  };

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gameBox}>
        <Text style={styles.title}>Jogo da Forca</Text>

        {/* DESENHO DA FORCA */}
        <View style={styles.forcaContainer}>
          <View style={styles.base} />
          <View style={styles.poste} />
          <View style={styles.topo} />
          <View style={styles.corda} />

          {/* Cabeça */}
          {letrasErradas.length > 0 && <View style={styles.cabeca} />}

          {/* Corpo */}
          {letrasErradas.length > 1 && <View style={styles.corpo} />}

          {/* Braço esquerdo */}
          {letrasErradas.length > 2 && <View style={styles.bracoEsq} />}

          {/* Braço direito */}
          {letrasErradas.length > 3 && <View style={styles.bracoDir} />}

          {/* Perna esquerda */}
          {letrasErradas.length > 4 && <View style={styles.pernaEsq} />}

          {/* Perna direita */}
          {letrasErradas.length > 5 && <View style={styles.pernaDir} />}
        </View>

        <Text style={styles.palavra}>{palavraCompleta}</Text>

        <Text style={styles.status}>
          Tentativas restantes:{" "}
          <Text style={styles.bold}>{maxTentativas - letrasErradas.length}</Text>
        </Text>

        <Text style={styles.status}>
          Letras erradas:{" "}
          <Text style={styles.erradas}>{letrasErradas.join(", ") || "—"}</Text>
        </Text>

        {!venceu && !perdeu && (
          <View style={styles.teclado}>
            {alfabeto.map((letra) => {
              const usada =
                letrasCertas.includes(letra) || letrasErradas.includes(letra);

              return (
                <TouchableOpacity
                  key={letra}
                  onPress={() => verificarLetra(letra)}
                  disabled={usada}
                  style={[
                    styles.tecla,
                    letrasCertas.includes(letra) && styles.certa,
                    letrasErradas.includes(letra) && styles.errada,
                  ]}
                >
                  <Text style={styles.teclaTexto}>{letra}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {venceu && (
          <Text style={styles.mensagem}>🎉 Você venceu! A palavra era "{palavra}"</Text>
        )}
        {perdeu && (
          <Text style={styles.mensagem}>❌ Você perdeu! A palavra era "{palavra}"</Text>
        )}

        {(venceu || perdeu) && (
          <TouchableOpacity onPress={reiniciar} style={styles.reiniciar}>
            <Text style={styles.reiniciarTexto}>Reiniciar Jogo</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, alignItems: "center" },
  loading: { fontSize: 22, marginTop: 50 },
  gameBox: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center" },

  /* FORCA */
  forcaContainer: {
    width: 200,
    height: 250,
    alignSelf: "center",
    marginTop: 20,
  },
  base: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 6,
    backgroundColor: "black",
  },
  poste: {
    position: "absolute",
    left: 20,
    bottom: 0,
    width: 6,
    height: "100%",
    backgroundColor: "black",
  },
  topo: {
    position: "absolute",
    top: 0,
    left: 20,
    width: 120,
    height: 6,
    backgroundColor: "black",
  },
  corda: {
    position: "absolute",
    top: 6,
    left: 140,
    width: 6,
    height: 30,
    backgroundColor: "black",
  },

  cabeca: {
    position: "absolute",
    top: 35,
    left: 120,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "red",
  },
  corpo: {
    position: "absolute",
    top: 75,
    left: 140,
    width: 4,
    height: 70,
    backgroundColor: "red",
  },
  bracoEsq: {
    position: "absolute",
    top: 95,
    left: 140,
    width: 40,
    height: 4,
    backgroundColor: "red",
    transform: [{ rotate: "-30deg" }],
  },
  bracoDir: {
    position: "absolute",
    top: 95,
    left: 104,
    width: 40,
    height: 4,
    backgroundColor: "red",
    transform: [{ rotate: "30deg" }],
  },
  pernaEsq: {
    position: "absolute",
    top: 145,
    left: 140,
    width: 35,
    height: 4,
    backgroundColor: "red",
    transform: [{ rotate: "40deg" }],
  },
  pernaDir: {
    position: "absolute",
    top: 145,
    left: 109,
    width: 35,
    height: 4,
    backgroundColor: "red",
    transform: [{ rotate: "-40deg" }],
  },

  palavra: {
    fontSize: 28,
    textAlign: "center",
    letterSpacing: 4,
    marginTop: 20,
    fontWeight: "bold",
  },

  status: { textAlign: "center", fontSize: 16, marginTop: 10 },
  bold: { fontWeight: "bold" },
  erradas: { color: "red", fontWeight: "bold" },

  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },

  tecla: {
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  teclaTexto: { fontSize: 18, fontWeight: "bold" },

  certa: { backgroundColor: "#6bc46b" },
  errada: { backgroundColor: "#ff6b6b" },

  mensagem: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  reiniciar: {
    backgroundColor: "#222",
    padding: 12,
    marginTop: 20,
    borderRadius: 10,
  },
  reiniciarTexto: { color: "white", textAlign: "center", fontSize: 18 },
});
