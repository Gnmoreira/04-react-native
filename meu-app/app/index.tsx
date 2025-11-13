import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useContador } from '../context/ContadorContext';
export default function Home() {
    const { valor } = useContador();
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Valor atual: {valor}</Text>
            <Link href="/incrementar" asChild>
                <Button title="Ir para incrementar" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
});