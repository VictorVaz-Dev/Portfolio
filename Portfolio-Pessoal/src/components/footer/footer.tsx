import { useTranslation } from 'react-i18next';

export const Footer = () =>{
    const { t } = useTranslation();

    return(
        <div className="w-full bg-[#0f0f0f] text-white shadow-md py-6 mt-[4vh]" id="contatos">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Redes Sociais */}
                <div className="flex space-x-4">
                <a href="#sobre" rel="noopener noreferrer" className="hover:text-[#33cccc] transition">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="32" height="32" />
                </a>
                <a href="#sobre" rel="noopener noreferrer" className="hover:text-[#33cccc] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <rect width="100%" height="100%" fill="white" rx="8"/>
                    <path fill="black" d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 
                        3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
                        1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 
                        1.304 3.495.997.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 
                        0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 
                        0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 
                        3-.405 1.02.006 2.043.139 3 
                        .405 2.29-1.552 3.297-1.23 
                        3.297-1.23.653 1.653.242 2.873.118 
                        3.176.77.84 1.234 1.91 1.234 3.22 
                        0 4.61-2.803 5.625-5.475 
                        5.92.43.37.823 1.102.823 2.222 
                        0 1.606-.015 2.898-.015 
                        3.293 0 .32.218.694.825.576C20.565 
                        22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z"/>
                    </svg>

                </a>
                <a href="#sobre" rel="noopener noreferrer" className="hover:text-[#33cccc] transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="32" height="32" />
                </a>
                </div>

                {/* Copyright */}
                <p className="text-sm text-white">
                &copy; {new Date().getFullYear()} {t("footer.thanks")}
                </p>
            </div>
        </div>
    )
}