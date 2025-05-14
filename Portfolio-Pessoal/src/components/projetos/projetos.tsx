import { BoxReveal } from "../../components/magicui/box-reveal"
import ImgCarrinho  from "../../assets/projetos/carrinho/carrinho.png"
import Tilt from 'react-parallax-tilt'



export const Projetos = () => {
    return(
        <div className="md:mt-[10vh] flex flex-col justify-center items-center" id="projetos">
            <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                <div className="m-auto justify-center items-center">
                    <h1 className="text-[3.5rem] text-white font-semibold">Meus Projetos</h1>
                    <p className="text-white">Segue alguns dos meu projetos concluídos e outros que estão em construção:</p>
                </div>                
            </BoxReveal>
            <BoxReveal boxColor={"#33cccc"} duration={0.8}>
                <div className="swiper">
                        <Tilt>
                         <div className="p-4 w-[400px] bg-[#2e3334] text-white inset-shadow-sm shadow-white">
                                <img src={ImgCarrinho} alt="foto do projeto carrinho" className="mb-[4vh]" />
                                <p>Projeto de carrinho de compras funcional feito com HTML, CSS e JavaScript puro. Possui interface responsiva, permite gerenciar produtos no carrinho e salva os dados em tempo real com Firebase. Ideal para quem está aprendendo e-commerce sem frameworks.</p>
                                <div className="flex flex-row gap-4 mt-[2vh]">
                                    <div>
                                        <a href="https://greenfarm-nu.vercel.app/index.html" target="_blank" className="cursor-pointer bg-white text-black p-[10px] rounded-[10%] flex flex-row items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 256 222"><path fill="currentColor" d="M128 0L256 222H0L128 0z"/></svg>
                                        Vercel</a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/VictorVaz-Dev/Carrinho" target="_blank" className="cursor-pointer bg-[#33cccc] p-[10px] rounded-[10%] flex flex-row items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.757-1.333-1.757-1.09-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108-0.775 0.418-1.305 0.76-1.605-2.665-0.305-5.466-1.335-5.466-5.93 0-1.31 0.47-2.38 1.235-3.22-0.135-0.303-0.54-1.523 
                                        0.105-3.176 0 0 1.005-0.322 3.3 1.23 0.96-0.267 1.98-0.399 3-0.405 1.02 0.006 2.04 0.138 3 0.405 2.28-1.552 3.285-1.23 3.285-1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 0.42 0.36 0.81 1.096 0.81 2.22 0 1.606-0.015 2.896-0.015 3.286 0 0.315 0.21 0.694 0.825 0.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        Github</a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                </div>
            </BoxReveal>
        </div>
    )
}