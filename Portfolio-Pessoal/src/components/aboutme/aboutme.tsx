import { BoxReveal } from "../../components/magicui/box-reveal";
import { AnimatedSubscribeButton } from "../../components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import imagemDePerfil from "../../assets/fotoPerfil/imagem-de-perfil.jpeg";
import VictorCV from "../../assets/curriculum/Curriculo_Victor_vaz_2025.pdf"


function DownloadCV() {
  const link = document.createElement("a");
  link.href = VictorCV; 
  link.download = "curriculo-victor.pdf"; 
  document.body.appendChild(link); 
  link.click(); 
  document.body.removeChild(link); 
}


export const Aboutme = () => {
  return (
    <div id="sobre" className="flex flex-col md:flex-row justify-center items-center gap-x-20 md:mt-[10vh] m-auto pr-6 pl-6">
      <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
          <p className="text-[3.5rem] text-white font-semibold">Sobre Mim<span className=" font-semibold text-[#33cccc]">.</span></p>
        </BoxReveal>

        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
          <h2 className="mt-[.5rem] text-white text-[1rem]">
            Olá, me chamo Victor Vaz e atualmente sou <span className=" font-semibold text-[#33cccc]"> Desenvolvedor front-end.</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
          <div className="mt-6 text-white text-[0.95rem] leading-relaxed">
            <p>
              Tenho formação em Sistemas para internet e entre outras faculdades,
              possuo experiência em tecnologias como{" "}
              <span className="font-semibold text-[#33cccc]">Tailwind</span>,{" "}
              <span className="font-semibold text-[#33cccc]">Vite</span>,{" "}
              <span className="font-semibold text-[#33cccc]">Firebase</span> e entre outras mais.<br/><br/>
              Gosto de criar aplicações modernas, responsivas e integradas com
              APIs e bancos de dados em tempo real.<br/><br/>

              Entre em contato comigo pelas minhas redes sociais😀:<br/>
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
            <div className="flex flex-row gap-4 mt-[20px] mb-[20px]">
                <a href="https://github.com/VictorVaz-Dev" target="_blank">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="32" height="32" />
                </a>
                <a href="https://www.linkedin.com/in/victor-vaz-b1b70422b/" target="_blank">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="32" height="32" />
                </a>
                <a href="https://wa.me/5511973985460" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="32" height="32" />
                </a>
                
            </div>
        </BoxReveal>

        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
            <AnimatedSubscribeButton className="w-36 bg-[#33cccc] text-white" onClick={DownloadCV}>
                <span className="group inline-flex items-center">
                    Baixar CV
                    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 size-4" />
                    Obrigado
                </span>
            </AnimatedSubscribeButton>
        </BoxReveal>
      </div>

    <BoxReveal boxColor={"#33cccc"} duration={0.8}>
      <div className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] bg-cover bg-center rounded-lg shadow-lg mt-10 md:mt-0"
      style={{ backgroundImage: `url(${imagemDePerfil})` }}>
      </div>

    </BoxReveal>

    </div>
  );
};
