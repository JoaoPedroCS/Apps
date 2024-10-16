import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, Pressable, PressableProps } from "react-native";

type Props = PressableProps & {
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    isSelected: boolean;
}

export function Category({ name, icon, isSelected,...rest}: Props) {
    const color = isSelected ? colors.green[300] : colors.gray[400];

    return (
        <Pressable style={styles.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={color}/>
            <Text style={[styles.name, {color}]}>{name}</Text>
        </Pressable>
    );
}