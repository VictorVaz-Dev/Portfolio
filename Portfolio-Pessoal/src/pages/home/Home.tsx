import { useState, useEffect } from "react";
import { Skills } from "../../components/skills/skills";
import { Aboutme } from "../../components/aboutme/aboutme";
import { Header } from "../../components/header/header";
import { Projetos } from "../../components/projetos/projetos";
import { Footer } from "../../components/footer/footer";
import VictorDevLoader from "../../loading/loading";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Defina o tempo de exibição do loader (por exemplo, 4 segundos)
    const timer = setTimeout(() => {
      setLoading(false); // Depois de 4 segundos, altera o estado para false, escondendo o loader
    }, 4000);

    // Limpeza do timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <VictorDevLoader /> // Exibe o loader enquanto 'loading' for true
      ) : (
        <>
          <Header />
          <Aboutme />
          <Projetos />
          <Skills />
          <Footer />
        </>
      )}
    </div>
  );
};