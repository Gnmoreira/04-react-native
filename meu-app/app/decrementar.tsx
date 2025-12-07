import { View, Text, Button, StyleSheet } from 'react-native';
import { useContador } from '../context/ContadorContext';
import { useRouter } from 'expo-router';
// importar os hooks e funcoes
export default function Decrementar() {
    const { valor, decrementar } = useContador();
    const router = useRouter();
//chama a funcao decrementar
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Valor atual: {valor}</Text>

           
            <Button title="Decrementar" onPress={decrementar} />

            
            <Button title="Voltar" onPress={() => router.push("/")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
        gap: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
});