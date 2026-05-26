import { Text, View } from "react-native";
import styles from "./AgencyRating.styles";
import { RatingIcon } from "../RatingIcon/RatingIcon";


export const AgencyRating = ({rating}) => {
    return <View style={styles.container}>
        <Text style={styles.rating}>{rating}</Text>
        <RatingIcon/>
        </View>;
};
