import { Text } from "react-native";
import styles from "./AgencyServicesList.styles";


export const AgencyServicesList = ({description}) => {
    return <Text style={styles.description}>{description}</Text>;        ;
};