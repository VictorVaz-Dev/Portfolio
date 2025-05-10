import { Aboutme } from "../../components/aboutme/aboutme";
import { Header } from "../../components/header/header";
import { Projetos } from "../../components/projetos/projetos";

const Home = () => {
    return (
      <div>
        <Header/>
        <Aboutme/>
        <Projetos/>
      </div>
    );
  };
  
  export default Home;