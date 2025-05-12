

export const Skills = () =>{
    return(
        <div className="flex flex-col justify-center items-center" id="skills">
            <h1 className="text-[3.5rem] text-white font-semibold mt-[4vh] mb-[4vh]">Habilidades</h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-[#33cccc] shadow-[0_0_20px_#33cccc] animate-bounce bg-gray-900 text-white font-semibold flex justify-center items-center">
                        <p>React.js (Vite, Native e Next)</p>
                    </div>
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-[#33cccc] shadow-[0_0_20px_#33cccc] animate-bounce bg-gray-900 text-white font-semibold flex justify-center items-center">
                        <p>SQL Server e Firebase</p>
                    </div>
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-[#33cccc] shadow-[0_0_20px_#33cccc] animate-bounce bg-gray-900 text-white font-semibold flex justify-center items-center">
                        <p>Plataformas Low code (Wordpress e Zoey)</p>
                    </div>
                    
                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-[#33cccc] shadow-[0_0_20px_#33cccc] animate-bounce bg-gray-900 text-white font-semibold flex justify-center items-center">
                        <p>Pacote Office</p>
                    </div>

                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-[#33cccc] shadow-[0_0_20px_#33cccc] animate-bounce bg-gray-900 text-white font-semibold flex justify-center items-center ">
                        <p>Liguagem C e C++</p>
                    </div>

                    <div className="relative w-[400px] p-4 rounded-lg border-2 border-[#33cccc] shadow-[0_0_20px_#33cccc] animate-bounce bg-gray-900 text-white font-semibold flex justify-center items-center">
                        <p>Python</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}