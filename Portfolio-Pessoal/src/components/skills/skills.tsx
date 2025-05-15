import RotatingText from "../rotatingText/rotatingText"
import { Marquee } from "../magicui/marquee"

export const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[6vh] mb-[10vh]" id="skills">
            <h1 className="text-[3.5rem] text-white font-semibold  mb-[6vh]">Habilidades <RotatingText
                texts={['Front-end', 'Dados', 'Backend']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            /></h1>

            <div className="flex justify-center items-center ">
                <div className="mt-[4vh] hidden md:block">
                    <Marquee pauseOnHover>
                        <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                            <p>React.js (Vite, Native e Next)</p>
                        </div>
                        <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                            <p>SQL Server e Firebase</p>
                        </div>
                        <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                            <p>Plataformas Low code (Wordpress e Zoey)</p>
                        </div>

                        <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                            <p>Pacote Office</p>
                        </div>
                        <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center ">
                            <p>Liguagem C e C++</p>
                        </div>
                        <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                            <p>Python</p>
                        </div>
                    </Marquee>
                </div>
                <div className="block md:hidden flex flex-col gap-4">
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                        <p>React.js (Vite, Native e Next)</p>
                    </div>
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                        <p>SQL Server e Firebase</p>
                    </div>
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                        <p>Plataformas Low code (Wordpress e Zoey)</p>
                    </div>

                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                        <p>Pacote Office</p>
                    </div>
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center ">
                        <p>Liguagem C e C++</p>
                    </div>
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-gray-950 bg-gray-950 text-white font-semibold flex justify-center items-center">
                        <p>Python</p>
                    </div>
                </div>
            </div>
        </div>
    )
}