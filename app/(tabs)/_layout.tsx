import { Tabs } from 'expo-router';
import Ionicons  from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: 'red', // Цвет активной вкладки
      headerStyle: {
        backgroundColor: 'green', // Фон шапки
      },
      headerShadowVisible: false, // Убрать тень у шапки
      headerTintColor: '#fff', // Цвет текста в шапке
      tabBarStyle: {
        backgroundColor: 'blue', // Фон панели вкладок
      },
    }}
    >
      <Tabs.Screen 
        name="index"    // - имя файла экрана (без расширения)
        options={{
         title: 'Home',  // - текст под иконкой
         tabBarIcon: ({color, focused}) => (    // - кастомная иконка: color - автоматически подхватывает tabBarActiveTintColor / focused - boolean, активна ли вкладка
            <Ionicons name={focused ? 'home-sharp': 'home-outline' } color={color} size={24} ></Ionicons>
         ),
         
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
