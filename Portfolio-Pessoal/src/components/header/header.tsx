import { VideoText } from "../../components/magicui/video-text";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
            VictorVaz-DEV
            </VideoText>
        </h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Sobre
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};
