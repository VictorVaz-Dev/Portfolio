import { BoxReveal } from "../../components/magicui/box-reveal";
import { AnimatedSubscribeButton } from "../../components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div id="about" className="flex flex-col md:flex-row justify-center items-center gap-x-20 md:mt-[10vh] m-auto pr-6 pl-6">
      <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
          <p className="text-[3.5rem] text-white font-semibold">
            {t("about.about")}
          <span className=" font-semibold text-[#33cccc]">.</span></p>
        </BoxReveal>

        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
          <h2 className="mt-[.5rem] text-white text-[1rem]">
              {t("about.intro")}{""}<span className="font-semibold text-[#33cccc]">{t("about.developer")}.</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#33cccc"} duration={0.8}>
          <div className="mt-6 text-white text-[0.95rem] leading-relaxed">
            <p>
              {t("about.college")}{" "}
              <span className="font-semibold text-[#33cccc]">Tailwind</span>,{" "}
              <span className="font-semibold text-[#33cccc]">Vite</span>,{" "}
              <span className="font-semibold text-[#33cccc]">Firebase </span>{t("about.another")}<span className="font-semibold text-[#33cccc]"> {t("about.more")}</span>.<br/><br/>
              {t("about.api")}
              <br/><br/>

              {t("about.social")}<br/>
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
                    {t("about.dowload")}
                    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 size-4" />
                    {t("about.thanks")}
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
