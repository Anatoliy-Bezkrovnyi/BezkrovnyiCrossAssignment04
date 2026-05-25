import { Text, TouchableOpacity } from "react-native";
import styles from "./BackButton.styles";

export const BackButton = ({title, onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.backButton} activeOpacity={0.5}>
        <Text style={styles.backButtonText}>{title}</Text>
    </TouchableOpacity>;
};