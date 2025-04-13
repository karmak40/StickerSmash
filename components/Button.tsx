import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Определение типа пропсов компонента Button
type Props = {
    label: string;          // Текст, отображаемый на кнопке (обязательный)
    theme?: 'primary';      // Опциональная тема кнопки (пока только 'primary')
};


export default function Button({ label, theme }: Props) {
// Если тема 'primary', рендерим специальную версию кнопки
    if (theme === 'primary') {
        return (
             // Контейнер кнопки с дополнительными стилями для primary темы
          <View
            style={[
              styles.buttonContainer,
              { 
                borderWidth: 4,       // Толщина рамки
                borderColor: '#ffd33d', // Желтый цвет рамки
                borderRadius: 18      // Скругление углов контейнера
            },
            ]}>
                  {/* Pressable - кликабельная область кнопки */}
            <Pressable
              style={[styles.button, { backgroundColor: '#fff' }]} // Белый фон
              onPress={() => alert('You pressed a button.')}>
              {/* Иконка из FontAwesome */}
              <FontAwesome 
                name="picture-o"  // Название иконки
                size={18}         // Размер иконки
                color="#25292e"   // Цвет иконки
                style={styles.buttonIcon} // Стили для иконки
              />
              <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
            </Pressable>
          </View>
        );
      }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
