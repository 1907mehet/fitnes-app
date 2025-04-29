import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Title, ProgressBar, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [exercises, setExercises] = React.useState([
    { name: 'Koşu 2km', done: false },
    { name: 'Squat 3x15', done: false },
    { name: 'Plank 60sn', done: false },
  ]);

  const toggle = (index) => {
    const updated = [...exercises];
    updated[index].done = !updated[index].done;
    setExercises(updated);
  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Title style={styles.title}>🏋️ Fitness Takip</Title>

        <Card style={styles.card}>
          <Card.Content>
            <Text>Egzersiz Tamamlanma</Text>
            <ProgressBar progress={exercises.filter(e => e.done).length / exercises.length} color="#4caf50" style={{ marginTop: 6 }} />
          </Card.Content>
        </Card>

        <Title style={styles.subtitle}>💪 Egzersizler</Title>
        {exercises.map((ex, idx) => (
          <Card key={idx} style={styles.card}>
            <Card.Content>
              <Text>{ex.name}</Text>
              <Button mode={ex.done ? "contained" : "outlined"} onPress={() => toggle(idx)} style={{ marginTop: 5 }}>
                {ex.done ? "Tamamlandı" : "İşaretle"}
              </Button>
            </Card.Content>
          </Card>
        ))}

        <Title style={styles.subtitle}>🍽️ Öğünler</Title>
        <Card style={styles.card}>
          <Card.Content>
            <Text>Kahvaltı: Yumurta, Zeytin, Çay</Text>
            <Text>Öğle: Tavuk, Bulgur, Ayran</Text>
            <Text>Akşam: Çorba, Salata</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 15 },
  subtitle: { fontSize: 18, marginTop: 20, marginBottom: 10 },
  card: { marginBottom: 10 },
});
