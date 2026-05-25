import { Image } from "react-native";
import styles from "./AgencyImage.styles";

export const AgencyImage = ({source}) => {
    return <Image source={source} style={styles.logo} />;
};
