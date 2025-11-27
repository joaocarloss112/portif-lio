import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/joaocarlos.png")}
        style={styles.foto}
      />

      <Text style={styles.nome}>João Carlos</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/sobre")}>
        <Text style={styles.botaoTexto}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/experiencia")}>
        <Text style={styles.botaoTexto}>Experiência</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/jogo_forca")}>
        <Text style={styles.botaoTexto}>Jogo da Forca</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 80,
    paddingBottom: 100,
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },

  foto: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },

  botao: {
    width: "80%",
    backgroundColor: "#333",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 18,
  },

  botaoTexto: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
