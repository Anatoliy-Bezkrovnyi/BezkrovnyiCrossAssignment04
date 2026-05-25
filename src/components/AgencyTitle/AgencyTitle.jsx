import { Text } from "react-native";
import styles from "./AgencyTitle.styles";

export const AgencyTitle = ({ title }) => {
    return <Text style={styles.title}>{title}</Text>; 
};