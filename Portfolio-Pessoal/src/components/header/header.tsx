import { VideoText } from "../../components/magicui/video-text";
import { useState } from 'react';
import { Link } from '../../components/nav/link'; // Certifique-se de importar o seu componente de Link aqui

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-[#0f0f0f] shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo/Texto com Vídeo */}
        <div className="relative h-20 w-80 overflow-hidden">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm">Portfolio</VideoText>
        </div>

        {/* Botão Hamburguer */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 20"
              stroke="currentColor"
              className="w-10 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links visíveis em telas grandes */}
        <div className="hidden lg:flex space-x-4">
          <Link />
        </div>

      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-[#0f0f0f] text-white`}>
        <div className="space-y-4 py-4 px-6">
          {["Sobre", "Projetos", "Skills", "Contatos"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="block text-lg font-medium relative bg-clip-text text-transparent bg-gradient-to-r from-[#0277bd] to-[#4dd0e1]
                        transition-all duration-300 ease-in-out
                        hover:text-[#b2ebf2]
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-gradient-to-r after:from-[#0277bd] after:to-[#4dd0e1] 
                        after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
