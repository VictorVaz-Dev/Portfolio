import { BoxReveal } from "../../components/magicui/box-reveal"
import Carousel from "../carousel/carousel"
import Imgcarrinho from "../../assets/projetos/carrinho/carrinho.png"
import Imglista from "../../assets/projetos/ToDoList/lista-de-afazeres.png"
import ImgESG from "../../assets/projetos/ESG/loginESG.png"
import GlareHover from '../../components/magicui/glare-hover'



import {
    FiCircle,
    FiCoffee,
    FiAirplay,
    FiShoppingCart,
} from "react-icons/fi";

export const Projetos = () => {
    return (
        <div>
            <div className="md:hidden mt-[10vh] flex flex-col justify-center items-center overflow-visible relative pr-6 pl-6" id="projetos">
                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="m-auto justify-center items-center">
                        <h1 className="text-[3.5rem] text-white font-semibold">Meus Projetos</h1>
                        <p className="text-white">Segue alguns dos meu projetos concluídos e outros que estão em construção:</p>
                    </div>
                </BoxReveal>
                <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                    <div className="flex flex-col md:flex-row md:gap-[50px]">
                        <div style={{ height: '600px', position: 'relative' }}>
                            <Carousel
                                baseWidth={400}
                                autoplay={false}
                                autoplayDelay={3000}
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
                        <h1 className="text-[3.5rem] text-white font-semibold">Meus Projetos</h1>
                        <p className="text-white">Segue alguns dos meu projetos concluídos e outros que estão em construção:</p>
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
                                    <h1 className="flex "><FiShoppingCart size={18} /> -Carrinho</h1>
                                    <p className="mt-[10px] mb-[10px]">Projeto de carrinho de compras funcional feito com HTML, CSS e JavaScript puro. Possui interface responsiva, permite gerenciar produtos no carrinho e salva os dados em tempo real com Firebase. Ideal para quem está aprendendo e-commerce sem frameworks. Tecnologias usadas: HTML, CSS, JS e Firebase</p>
                                </div>
                                <div className="flex gap-4">
                                    <a className="flex p-[8px] bg-white text-black rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://github.com/VictorVaz-Dev/Carrinho" target="_blank">Repositório<FiCoffee size={18} /></a>
                                    <a className="flex p-[8px] bg-cyan-500 text-white rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://greenfarm-nu.vercel.app/index.html" target="_blank">Ver site<FiAirplay size={18} /></a>
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
                                    <h1 className="flex "><FiCircle size={18} /> -Lista de afazeres</h1>
                                    <p className="mt-[10px] mb-[10px]">Aplicação web para gerenciamento de tarefas, desenvolvida com React, TypeScript e Tailwind CSS. Permite adicionar, editar, remover e filtrar tarefas, com armazenamento em tempo real no Firebase Firestore. Ideal para praticar desenvolvimento full stack com foco em produtividade.   </p>
                                </div>
                                <div className="flex gap-4">
                                    <a className="flex p-[8px] bg-white text-black rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://github.com/VictorVaz-Dev/To-do-list" target="_blank">Repositório<FiCoffee size={18} /></a>
                                    <a className="flex p-[8px] bg-cyan-500 text-white rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://to-do-list-iota-blue.vercel.app/" target="_blank">Ver site<FiAirplay size={18} /></a>
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
                                    <h1 className="flex "><FiShoppingCart size={18} /> -Plataforma de cadastro</h1>
                                    <p className="mt-[10px] mb-[10px]">Plataforma web desenvolvida com HTML, CSS e JavaScript, usando Vite. Possui interface responsiva e interativa, com busca de endereço via API do ViaCEP. Os dados dos clientes são salvos em tempo real no Firebase, ideal para aprendizado de aplicações full stack. Tecnologias usadas: React Vite, Firebase e APi ViaCEP</p>
                                </div>
                                <div className="flex gap-4">
                                    <a className="flex p-[8px] bg-white text-black rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://github.com/VictorVaz-Dev/Plataforma-ESG" target="_blank">Repositório<FiCoffee size={18} /></a>
                                    <a className="flex p-[8px] bg-cyan-500 text-white rounded-[18px] hover:cursor-pointer hover:scale-115 transition-transform" href="https://plataforma-esg-inky.vercel.app" target="_blank">Ver site<FiAirplay size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </BoxReveal>
            </div>
        </div>

    )
}
