import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1e1e1e', // Темний фон панелі, під стиль твоїх карток
    borderTopWidth: 0,          // Прибираємо дефолтну світлу лінію зверху
    height: 65,                 // Оптимальна висота для кліків
    paddingBottom: 8,           // Відступ підписів від низу екрана
    paddingTop: 8,              // Відступ іконок від верху панелі
  },
  tabBarLabel: {
    fontSize: 12,               // Розмір шрифту підписів
    fontWeight: '500',
  },
  header: {
    backgroundColor: '#303030', // Колір верхнього хедера екрана
    shadowColor: 'transparent', // Прибираємо тінь хедера на iOS
    elevation: 0,               // Прибираємо тінь хедера на Android
  },
});

export default styles;