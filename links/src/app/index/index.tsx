import { Image, View, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";


export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>
                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>

            <Categories/>

            <FlatList
            data={["1", "2", "3", "4", "5"]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <Link
                    name="Joao Pedro"
                    url="https://joaopedrocs.com"
                    onDetails={() => console.log("Clicou")}/>
            )}
            style={styles.links}
            contentContainerStyle={styles.linksContent}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
