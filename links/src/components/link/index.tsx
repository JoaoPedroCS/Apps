import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";


type Props = {
    name: string;
    url: string;
    onDetailPress: () => void;
}