import { createContext, useContext, useState, ReactNode } from 'react';

// Defina um tipo para os heróis
type Hero = {
  name: string;
  powerstats: [];
  origin: string;
  images: [];
  // Adicione outros campos conforme necessário
};

// Defina o tipo para o contexto
type HeroContextType = {
  heroes: Hero[];
  setHeroes: (heroes: Hero[]) => void;
};

const HeroContext = createContext<HeroContextType | undefined>(undefined);

type HeroProviderProps = {
  children: ReactNode;
};

export function HeroProvider({ children }: HeroProviderProps) {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  return (
    <HeroContext.Provider value={{ heroes, setHeroes }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = useContext(HeroContext);
  return context;
}
