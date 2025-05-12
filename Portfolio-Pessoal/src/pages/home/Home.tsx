import { Skills } from "../../components/skills/skills";
import { Aboutme } from "../../components/aboutme/aboutme";
import { Header } from "../../components/header/header";
import { Projetos } from "../../components/projetos/projetos";
import { Footer } from "../../components/footer/footer";

const Home = () => {
    return (
      <div>
        <Header/>
        <Aboutme/>
        <Projetos/>
        <Skills/>
        <Footer/>
      </div>
    );
  };
  
export default Home;