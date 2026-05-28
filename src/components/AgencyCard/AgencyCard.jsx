import { View, useWindowDimensions } from "react-native";
import createStyles from "./AgencyCard.styles";
import { AgencyRating } from "./AgencyRating/AgencyRating";
import { AgencyAddress } from "./AgencyAddress/AgencyAddress";
import { BackButton } from "./BackButton/BackButton";
import { AgencyImage } from "./AgencyImage/AgencyImage";
import { AgencyTitle } from "./AgencyTitle/AgencyTitle";  
import { AgencyServicesList } from "./AgencyServicesList/AgencyServicesList";
import { CustomButton } from "../CustomButton/CustomButton";
 



export const AgencyCard = ({ agency, onPress, onBackPress }) => {
  const { width, height } = useWindowDimensions();  
  const styles = createStyles(width, height);

  // Перевірка на випадок, якщо дані випадково не передали
  if (!agency) return null;

  return (
    <View style={styles.card}>
      {/* Кнопка назад тепер використовує передану функцію */}
      <BackButton title="Назад" onPress={onBackPress} />
      
      <View style={styles.summary}>
        {/* Картинку беремо динамічно з об'єкта агенції */}
        <AgencyImage source={agency.image} />
        
        <View style={styles.agencySummary}>
          <View style={styles.agencyTitle}>
            {/* Текст заголовка та рейтинг беремо з пропсів */}
            <AgencyTitle title={agency.title} />
            <AgencyRating rating={agency.rating.toString()} />
          </View>
          
          {/* Передаємо розгорнутий об'єкт адреси через деструктуризацію */}
          <AgencyAddress 
            region={agency.address.region} 
            district={agency.address.district} 
            town={agency.address.town} 
            street={agency.address.street} 
          />
        </View>        
      </View>
      
      {/* Опис послуг теж динамічний */}
      <AgencyServicesList description={agency.description} />
      
      {/* Кнопка замовлення викликає функцію onPress */}
      <CustomButton title="Зробити замовлення" onPress={onPress} />   
    </View>
  );
};

export default AgencyCard;