import { Image, View, TouchableOpacity, FlatList, Modal, Text } from "react-native";
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

            <Modal transparent visible>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Portfolio</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                            Joaopedrocs
                        </Text>
                        <Text style={styles.modalUrl}>
                            https://joaopedrocs.com
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
