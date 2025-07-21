import "./App.css";
import LightRays from "./Backgrounds/LightRays/LightRays";
import Dock from "./Components/Dock/Dock";
import VscHome from "@meronex/icons/vsc/VscHome";
import VscArchive from "@meronex/icons/vsc/VscArchive";
import VscAccount from "@meronex/icons/vsc/VscAccount";
import VscSettingsGear from "@meronex/icons/vsc/VscSettingsGear";
import MdCodeWorking from "@meronex/icons/ios/MdCodeWorking";
import MdGitNetwork from "@meronex/icons/ios/MdGitNetwork";
import EnEmail from "@meronex/icons/en/EnEmail";
import Hero from "./Components/Hero";

function App() {
  const items = [
    {
      icon: <VscHome size={22} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscAccount size={22} />,
      label: "About",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <MdCodeWorking size={22} />,
      label: "Work",
      onClick: () => alert("Work!"),
    },
    {
      icon: <MdGitNetwork size={22} />,
      label: "Projects",
      onClick: () => alert("Projects!"),
    },
    {
      icon: <EnEmail size={22} />,
      label: "Contact",
      onClick: () => alert("Contact!"),
    },
  ];

  return (
    <>
      <Hero />
      <div className="light-rays-container">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <Dock
        items={items}
        panelHeight={87}
        baseItemSize={70}
        magnification={100}
        className="dock-style"
      />
    </>
  );
}

export default App;
