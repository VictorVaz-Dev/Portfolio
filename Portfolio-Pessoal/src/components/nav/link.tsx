export const Link = () => {
    return (
      <nav className="space-x-4">
        {["Sobre", "Projetos", "Contatos"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`} 
            className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#0277bd] to-[#4dd0e1]
                        transition-all duration-300 ease-in-out
                        hover:text-[#b2ebf2]
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-gradient-to-r after:from-[#0277bd] after:to-[#4dd0e1] 
                        after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </a>
        ))}
      </nav>
    );
  };
  