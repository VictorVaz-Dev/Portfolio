import { BoxReveal } from "../../components/magicui/box-reveal"
import Carousel from "../carousel/carousel"
import Carousel2 from "../carousel/carousel2"

  


export const Projetos = () => {
    return (
        <div className="md:mt-[10vh] flex flex-col justify-center items-center overflow-visible relative" id="projetos">
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
                            autoplay={true}
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                        />
                        </div>
                        <div>
                            <Carousel2
                                baseWidth={400}
                                autoplay={true}
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />  
                        </div>
                </div>
            </BoxReveal>
        </div>
    )
}
