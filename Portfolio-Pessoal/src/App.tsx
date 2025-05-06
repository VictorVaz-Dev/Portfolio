import './App.css'
import { VideoText } from "@/registry/magicui/video-text";

function App() {

  return (
    <>
      <div className="relative h-[500px] w-full overflow-hidden">
        <VideoText src="https://cdn.magicui.design/ocean-small.webm">OCEAN</VideoText>
      </div>
    </>
  )
}

export default App
