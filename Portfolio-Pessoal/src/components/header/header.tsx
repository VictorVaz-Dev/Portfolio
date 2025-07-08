import { VideoText } from "../../components/magicui/video-text";
import { useState } from 'react';
import { Link } from '../../components/nav/link'; 
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const navItems = ['about', 'projects', 'skills', 'contact'];
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <header className="w-full bg-[#0f0f0f] shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo/Texto com Vídeo */}
        <div className="relative h-20 w-80 overflow-hidden">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm">Victor</VideoText>
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
        <button onClick={toggleLanguage} className="mt-2 px-2 py-2 bg-cyan-300 text-white rounded hover:cursor-pointer">
          {t(i18n.language === 'pt' ? 'toggle.en' : 'toggle.pt')}
        </button>
        <div className="space-y-4 py-4 px-6">
          {navItems.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="block text-lg font-medium relative bg-clip-text text-transparent bg-gradient-to-r from-[#0277bd] to-[#4dd0e1]
                        transition-all duration-300 ease-in-out
                        hover:text-[#b2ebf2]
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-gradient-to-r after:from-[#0277bd] after:to-[#4dd0e1] 
                        after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
