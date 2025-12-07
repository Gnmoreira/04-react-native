import { createContext, useContext, useState, ReactNode } from 'react';
//deixa mais rapido porque carrega no navegador usando hooks
interface ContadorContextType {
    valor: number;
    incrementar: () => void;
    decrementar: () => void;   
}
//chama as funcoes de incrementar e decrementar porem ainda sem receber nenhumn valor
const ContadorContext = createContext<ContadorContextType | undefined>(undefined);

export function ContadorProvider({ children }: { children: ReactNode }) {
    const [valor, setValor] = useState(0);

    const incrementar = () => setValor(v => v + 1);
    const decrementar = () => setValor(v => v - 1); 
// chama as funcoes, desta vez recebendo os valores de acrescentar 1 e diminuir 1
    return (
        <ContadorContext.Provider value={{ valor, incrementar, decrementar }}>
            {children}
        </ContadorContext.Provider>
    );
}

export function useContador() {
    const context = useContext(ContadorContext);
    if (!context)
        throw new Error('useContador deve ser usado dentro de ContadorProvider');
    return context;
}
//codigo similar ao throw execption do java