import { BoxReveal } from "../../components/magicui/box-reveal"
import Carousel from "../carousel/carousel"
import Imgcarrinho from "../../assets/projetos/carrinho/carrinho.png"
import Imglista from "../../assets/projetos/ToDoList/lista-de-afazeres.png"
import ImgESG from "../../assets/projetos/ESG/loginESG.png"
import GlareHover from '../../components/magicui/glare-hover'
import { useTranslation } from "react-i18next";



import {
    FiCircle,
    FiCoffee,
    FiAirplay,
    FiShoppingCart,
} from "react-icons/fi";

export const Projetos = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="md:hidden mt-[10vh] flex flex-col justify-center items-center overflow-visible relative pr-6 pl-6" id="projects">
                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="m-auto justify-center items-center">
                        <h1 className="text-[3.5rem] text-white font-semibold">{t("projects.title")}</h1>
                        <p className="text-white">{t("projects.subtitle")}</p>
                    </div>
                </BoxReveal>
                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="flex flex-col md:flex-row md:gap-[50px]">
                        <div style={{ height: '600px', position: 'relative' }}>
                            <Carousel
                                baseWidth={400}
                                autoplay={false}
                                autoplayDelay={4000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div>
                    </div>
                </BoxReveal>
            </div>

            <div className="hidden md:block md:mt-[10vh] md:flex flex-col justify-center items-center overflow-visible relative pr-6 pl-6" id="projetos">
                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="m-auto justify-center items-center">
                        <h1 className="text-[3.5rem] text-white font-semibold">{t("projects.title")}</h1>
                        <p className="text-white">{t("projects.subtitle")}</p>
                    </div>
                </BoxReveal>
                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="mt-[10vh]">
                        <div id="projeto-1" className="text-white flex w-[900px] m-auto">
                            <div>
                                <GlareHover
                                    glareColor="#ffffff"
                                    glareOpacity={0.3}
                                    glareAngle={-30}
                                    glareSize={300}
                                    transitionDuration={800}
                                    playOnce={false}
                                >
                                <img src={Imgcarrinho} className="h-[18vh] rounded-[18px]" alt="Foto do projeto de carrinho" />
                                </GlareHover>
                            </div>
                            
                            <div className="flex flex-col justify-center ml-[20px]">
                                <div>
                                    <h1 className="flex "><FiShoppingCart size={18} /> {t("project1.title")}</h1>
                                    <p className="mt-[10px] mb-[10px]">{t("project1.subtitle")}</p>
                                </div>
                                <div className="flex gap-4">
                                    <a className="flex items-center p-[8px] bg-white text-black rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform " href="https://github.com/VictorVaz-Dev/Carrinho" target="_blank">{t("projectButton.repository")} <FiCoffee className="ml-[5px]" size={18} /></a>
                                    <a className="flex items-center p-[8px] bg-cyan-500 text-white rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://greenfarm-nu.vercel.app/index.html" target="_blank">{t("projectButton.showSite")}<FiAirplay className="ml-[5px]" size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </BoxReveal>

                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="mt-[10vh]">
                        <div id="projeto-2" className="text-white flex w-[900px] m-auto">
                            <div>
                                <GlareHover
                                    glareColor="#ffffff"
                                    glareOpacity={0.3}
                                    glareAngle={-30}
                                    glareSize={300}
                                    transitionDuration={800}
                                    playOnce={false}
                                >
                                <img src={Imglista} className="h-[19vh] rounded-[18px]" alt="Foto do projeto de lista de afazeres" />
                                </GlareHover>
                            </div>
                            
                            <div className="flex flex-col justify-center ml-[20px]">
                                <div>
                                    <h1 className="flex "><FiCircle size={18} /> {t("project2.title")}</h1>
                                    <p className="mt-[10px] mb-[10px]">{t("project2.subtitle")}</p>
                                </div>
                                <div className="flex gap-4">
                                    <a className="flex items-center p-[8px] bg-white text-black rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://github.com/VictorVaz-Dev/To-do-list" target="_blank">{t("projectButton.repository")}<FiCoffee className="ml-[5px]" size={18} /></a>
                                    <a className="flex items-center p-[8px] bg-cyan-500 text-white rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://to-do-list-iota-blue.vercel.app/" target="_blank">{t("projectButton.showSite")}<FiAirplay className="ml-[5px]" size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </BoxReveal>

                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="mt-[10vh]">
                        <div id="projeto-3" className="text-white flex w-[900px] m-auto">
                            <div>
                                <GlareHover
                                    glareColor="#ffffff"
                                    glareOpacity={0.3}
                                    glareAngle={-30}
                                    glareSize={300}
                                    transitionDuration={800}
                                    playOnce={false}
                                >
                                <img src={ImgESG} className="h-[19vh] rounded-[18px]" alt="Foto do projeto de ESG" />
                                </GlareHover>
                            </div>
                            
                            <div className="flex flex-col justify-center ml-[20px]">
                                <div>
                                    <h1 className="flex "><FiShoppingCart size={18} />{t("project3.title")}</h1>
                                    <p className="mt-[10px] mb-[10px]">{t("project3.subtitle")}</p>
                                </div>
                                <div className="flex gap-4">
                                    <a className="flex items-center p-[8px] bg-white text-black rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://github.com/VictorVaz-Dev/Plataforma-ESG" target="_blank">{t("projectButton.repository")}<FiCoffee className="ml-[5px]" size={18} /></a>
                                    <a className="flex items-center p-[8px] bg-cyan-500 text-white rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://plataforma-esg-inky.vercel.app" target="_blank">{t("projectButton.showSite")}<FiAirplay className="ml-[5px]" size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </BoxReveal>
            </div>
        </div>

    )
}
