import { Slot } from 'expo-router';
import { ContadorProvider } from '../context/ContadorContext';
//hook
export default function Layout() {
    return (
        <ContadorProvider>
            <Slot />
        </ContadorProvider>
    );
}