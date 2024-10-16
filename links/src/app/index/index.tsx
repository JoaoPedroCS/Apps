import { Image, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Category } from "@/components/category";


export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>
                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>
            
            <Category name="Massinha" icon="lightbulb" isSelected/>
            <Category name="Amora" icon="star" isSelected={false}/>
            <Category name="Princesa" icon="stars" isSelected={false}/>
        </View>
    );
}
