import { ScrollView } from 'react-native';
import AgencyCard from '../../../components/AgencyCard/AgencyCard';
import agenciesData from '../../../data/agencyProvider'; 

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ gap: 15, padding: 10 }}>
      {agenciesData.map((item) => (
        <AgencyCard 
          key={item.agencyID} 
          agency={item} // Передаємо весь об'єкт агенції
          onPress={() => navigation.navigate('OrderScreen', { id: item.agencyID })} // Логіка для кнопки замовлення
          onBackPress={() => navigation.goBack()} // Логіка для кнопки Назад
        />
      ))}
    </ScrollView>
  );
}