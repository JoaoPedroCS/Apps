import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62,
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        color: colors.green[300],
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo: {
        height: 32,
        width: 38,
    },
}); 