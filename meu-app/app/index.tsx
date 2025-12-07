import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useContador } from '../context/ContadorContext';
//importa hooks e funcoes
export default function Home() {
    const { valor } = useContador();
// cria o painel do contador onde podemos ver o numero sendo incrementado e decrementado
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Valor atual: {valor}</Text>

            
            <Link href="/incrementar" asChild>
                <Button title="Ir para incrementar" />
            </Link>

            
            <Link href="/decrementar" asChild>
                <Button title="Ir para decrementar" />
            </Link>
        </View>
    );
}
//sao os botoes que direcionam para incrementar e decrementar
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
        gap: 15, 
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
});