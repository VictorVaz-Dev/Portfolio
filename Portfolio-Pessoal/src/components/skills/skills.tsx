import { Marquee } from "../magicui/marquee"


export const Skills = () =>{
    return(
        <div className="flex flex-col justify-center items-center mt-[6vh] mb-[10vh]" id="skills">
            <h1 className="text-[3.5rem] text-white font-semibold  mb-[6vh]">Habilidades</h1>
            <div className="flex justify-center items-center">
                <div className="gap-10 text-white">
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
            </div>
        </div>
    )
}