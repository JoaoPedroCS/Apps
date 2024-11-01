import { useState } from "react";
import { Image, View, TouchableOpacity, FlatList, Modal, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";


export default function Index() {
    const [category, setCategory] = useState(categories[0].name);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>
                <TouchableOpacity onPress={() => router.navigate("/add")} >
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>

            <Categories onChange={setCategory} selected={category}/>

            <FlatList
            data={["1", "2", "3", "4", "5"]}
            keyExtractor={(item) => item}
            renderItem={() => (
                <Link
                    name="Joao Pedro"
                    url="https://joaopedrocs.com"
                    onDetails={() => console.log("Clicou")}/>
            )}
            style={styles.links}
            contentContainerStyle={styles.linksContent}
            showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Portfolio</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>
                            JoaoPedroCS
                        </Text>
                        <Text style={styles.modalUrl}>
                            https://joaopedrocs.com/
                        </Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary"/>
                            <Option name="Abrir" icon="open-in-new" variant="primary"/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
