 import { useTranslation } from 'react-i18next';

export const Link = () => {
  const { t, i18n } = useTranslation();
  const navItems = ['about', 'projects', 'skills', 'contact'];
 

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLanguage);
  };


    return (
      <nav className="space-x-4">
        <button onClick={toggleLanguage} className="mt-2 px-2 py-2 bg-cyan-300 text-white rounded hover:cursor-pointer">
            {t(i18n.language === 'pt' ? 'toggle.en' : 'toggle.pt')}
        </button>
      {navItems.map((key) => (
        <a
          key={key}
          href={`#${key}`}
          className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#0277bd] to-[#4dd0e1]
                  transition-all duration-300 ease-in-out
                  hover:text-[#b2ebf2]
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                  after:bg-gradient-to-r after:from-[#0277bd] after:to-[#4dd0e1] 
                  after:transition-all after:duration-300 hover:after:w-full"
        >
          {t(`nav.${key}`)}
        </a>
      ))}
    </nav>
    );
  };
  