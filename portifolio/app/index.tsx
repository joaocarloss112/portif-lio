import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={require("../assets/images/joaocarlos.png")}
          style={styles.profile}
        />

        <View style={styles.textArea}>
          <Text style={styles.title}>João Carlos</Text>
          <Text style={styles.paragraph}>
            Sou estudante de Ciência da Computação e em rumo ao
            desenvolvimento Full Stack, tenho experiência em projetos Web
            utilizando Django, React e Next. Além disso, contribuo em um projeto
            de RPA e um cardápio digital para uma doceria.
          </Text>
        </View>

        <View style={styles.skillsSection}>
          <Text style={styles.subtitle}>Habilidades</Text>

          <View style={styles.skillsGrid}>
            {["React", "Next.js", "Django", "MySQL", "Java", "Python"].map((skill) => (
              <View key={skill} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#b86868ff", padding: 20 },
  hero: { alignItems: "center", marginTop: 20 },
  profile: { width: 200, height: 220, borderRadius: 12 },
  textArea: { marginTop: 20 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center" },
  paragraph: { fontSize: 16, textAlign: "center", marginTop: 10 },
  skillsSection: { marginTop: 20, width: "100%" },
  subtitle: { fontSize: 22, fontWeight: "bold" },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  skillTag: {
    backgroundColor: "#222",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skillText: { color: "#fff", fontWeight: "bold" },
});
