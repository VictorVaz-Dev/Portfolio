export const Footer = () =>{
    return(
        <div className="w-full bg-[#33cccc] text-white shadow-md py-6 mt-[4vh]" id="contatos">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Redes Sociais */}
                <div className="flex space-x-4">
                <a href="#sobre" target="_blank" rel="noopener noreferrer" className="hover:text-[#33cccc] transition">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="32" height="32" />
                </a>
                <a href="#sobre" target="_blank" rel="noopener noreferrer" className="hover:text-[#33cccc] transition">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="32" height="32" />
                </a>
                <a href="#sobre" target="_blank" rel="noopener noreferrer" className="hover:text-[#33cccc] transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="32" height="32" />
                </a>
                </div>

                {/* Copyright */}
                <p className="text-sm text-black">
                &copy; {new Date().getFullYear()} Victor Vaz. Todos os direitos reservados.
                </p>
            </div>
        </div>

    )
}