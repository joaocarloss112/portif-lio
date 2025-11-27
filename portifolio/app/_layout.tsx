import { Slot, useRouter, usePathname } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();
  type NavItemProps = {

    label: string;
    route: string;
 };


  const NavItem = ({ label, route }: NavItemProps) => (
    <TouchableOpacity
      onPress={() => router.push(route as any)}
      style={{
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomWidth: pathname === route ? 2 : 0,
        borderBottomColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: pathname === route ? "#fff" : "#ddd",
          fontWeight: pathname === route ? "bold" : "normal",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#b86868ff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#8a4a4aff",
          paddingTop: 50,
          paddingBottom: 10,
        }}
      >
        <NavItem label="Home" route="/" />
        <NavItem label="Sobre" route="/sobre" />
        <NavItem label="Experiências" route="/experiencia" />
        <NavItem label="Jogo" route="/jogo_forca" />
      </View>
      <Slot />
    </View>
  );
}
