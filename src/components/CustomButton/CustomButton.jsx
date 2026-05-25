import { Text, TouchableOpacity } from "react-native";
import styles from "./CustomButton.styles";

export const CustomButton = ({title, onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>;
};