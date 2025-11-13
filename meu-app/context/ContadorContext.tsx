import { createContext, useContext, useState, ReactNode } from 'react';
interface ContadorContextType {
    valor: number;
    incrementar: () => void;
}

const ContadorContext = createContext<ContadorContextType |
    undefined>(undefined);
export function ContadorProvider({ children }: { children: ReactNode }) {
    const [valor, setValor] = useState(0);
    const incrementar = () => setValor((v) => v + 1);
    return (
        <ContadorContext.Provider value={{ valor, incrementar }}>
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