import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Experiencias() {
  const projetos = [
    {
      titulo: "Bella Doceria",
      descricao:
        "Cardápio digital interativo para uma doceria, permitindo que os clientes visualizem os produtos e peçam pelo WhatsApp.",
      tecnologias: "Django, MySQL, HTML, CSS",
      imagem: require("../assets/images/logo.png"),
      github: "https://github.com/liralves/Projeto-Integrador",
    },
    {
      titulo: "FilmeFlix",
      descricao:
        "Aplicação que consome a API do TMDB para exibir filmes populares, categorias e gêneros, em interface estilo streaming.",
      tecnologias: "Next.js, React, TMDB API",
      imagem: require("../assets/images/filmeflix.png"),
      github: "https://github.com/joaocarloss112/filmeflix",
    },
    {
      titulo: "Automação com WebDriver",
      descricao:
        "Sistema de automação em Python usando WebDriver, integrado a MySQL para salvar resultados e relatórios.",
      tecnologias: "Python, MySQL",
      imagem: require("../assets/images/webdriver.png"),
      github: "https://github.com/joaocarloss112/webdriver",
    },
    {
      titulo: "Portfólio Mobile",
      descricao:
        "Versão mobile do meu portfólio, desenvolvida com React Native e Expo.s.",
      tecnologias: "Expo, React Native, Expo Router, TypeScript",
      imagem: require("../assets/images/joaocarlos.png"),
      github: "https://github.com/joaocarloss112/portif-lio"
    },
    {
      titulo: "Portfólio Web",
      descricao:
        "Meu portfólio pessoal desenvolvido em Next.js, onde apresento minha trajetória, habilidades e projetos.",
      tecnologias: "Next.js, React, CSS Modules",
      imagem: require("../assets/images/joaocarlos.png"),
      github: "https://github.com/joaocarloss112/portifolio",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={styles.titulo}>Projetos</Text>

        <View style={styles.grid}>
          {projetos.map((p, i) => (
            <View key={i} style={styles.card}>
              <Image source={p.imagem} style={styles.img} resizeMode="cover" />

              <Text style={styles.cardTitulo}>{p.titulo}</Text>
              <Text style={styles.cardDesc}>{p.descricao}</Text>

              <Text style={styles.tech}>
                <Text style={{ fontWeight: "bold" }}>Tecnologias:</Text> {p.tecnologias}
              </Text>

              <TouchableOpacity onPress={() => Linking.openURL(p.github)}>
                <Text style={styles.link}>Ver no GitHub</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#b86868ff",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#fff",
} ,

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 16,
    marginBottom: 15,
  },
  img: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardDesc: {
    marginTop: 6,
    fontSize: 14,
  },
  tech: {
    marginTop: 8,
    fontSize: 13,
    color: "#333",
  },
  link: {
    marginTop: 10,
    color: "#007bff",
    fontWeight: "bold",
  },
});
