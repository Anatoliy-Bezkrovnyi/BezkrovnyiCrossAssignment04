import { Text, View } from "react-native";
import styles from "./AgencyAddress.styles";


export const AgencyAddress = ({region, district, town, street}) => {
    return <View style={styles.container}>
        <Text style={styles.region}>{region}</Text>
        <Text style={styles.district}>{district}</Text>
        <Text style={styles.town}>{town}</Text>
        <Text style={styles.street}>{street}</Text>        
        </View>;
};

