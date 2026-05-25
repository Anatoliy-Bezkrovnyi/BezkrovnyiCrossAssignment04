import { View, useWindowDimensions } from "react-native";
import createStyles from "./AgencyCard.styles";
import { AgencyRating } from "../AgencyRating/AgencyRating";
import { AgencyAddress } from "../AgencyAddress/AgencyAddress";
import { BackButton } from "../BackButton/BackButton";
import { AgencyImage } from "../AgencyImage/AgencyImage";
import { AgencyTitle } from "../AgencyTitle/AgencyTitle";  
import { AgencyServicesList } from "../AgencyServicesList/AgencyServicesList";
import { CustomButton } from "../CustomButton/CustomButton";
 



export const AgencyCard = () => {

    const { width, height } = useWindowDimensions();  
    const styles = createStyles(width, height);

    return <View style={styles.card}>
        <BackButton title="Назад" onPress={() => {}}/>
        <View style={styles.summary}>
            <AgencyImage source={require('../../img/Egyptian_God_Anubis.webp')} />
            <View style={styles.agencySummary}>
                <View style={styles.agencyTitle}>
                    <AgencyTitle title="Анубіс" />
                    <AgencyRating rating="4.5" />
                </View>
                <AgencyAddress region="Київська область" district="Бучанський район" town="м. Вишневе" street="вул. Лесі Українки 72а" />
            </View>        
        </View>
        <AgencyServicesList description="Підбір послуг згідно наявного бюджету замовника. Оформлення всіх необхідних документів. 
                Транспортування з закордону. Оформлення місця поховання. Прибирання, догляд за місцем поховання, підтримання цілосності об’єктів "/>
        <CustomButton title="Зробити замовлення" onPress={() => {}}/>   
        </View>;
};