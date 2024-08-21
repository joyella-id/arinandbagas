import { MobileOnlyLayout } from "./Components/Shared/MobileOnlyLayout/MobileOnlyLayout";
import { HalamanPembuka } from "./Components/Pages/HalamanPembuka/HalamanPembuka";
import { LoveStory } from "./Components/Pages/LoveStory/LoveStory";
import { Gallery } from "./Components/Pages/Gallery/Gallery";
import ColorTransition from "./Components/Shared/ColorTransition/ColorTransition";
import { PerkenalanPengantin } from "./Components/Pages/PerkenalanPengantin/PerkenalanPengantin";
import { AyatAlQuran } from "./Components/Pages/AyatAlQuran/AyatAlQuran";
import { WeddingGift } from "./Components/Pages/WeddingGift/WeddingGift";
import { DetailAcara } from "./Components/Pages/DetailAcara/DetailAcara";
import { Penutup } from "./Components/Pages/Penutup/Penutup";
import { Footer } from "./Components/Pages/Footer/Footer";
import { RSVPAndWishes } from "./Components/Pages/RSVPAndWishes/RSVPAndWishes";
import { MusicProvider } from "./Components/Shared/Music/Music";
import Music from "./Components/Shared/Music/Music";
import { useIntersectionObserver } from "./utils/intersectionObserver";
import { ToastContainer } from "react-toastify";
import Video from "./Components/Shared/Video/Video";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ModalProvider } from "./Components/Shared/Modal/Modal";

function App() {
  useIntersectionObserver();
  return (
    <div id="topMostContainer" className="App">
      <div>
        <MusicProvider>
          <ModalProvider>
            <MobileOnlyLayout>
              <HalamanPembuka />
              <AyatAlQuran />
              <PerkenalanPengantin />
              <ColorTransition
                height="100px"
                width="100%"
                colors={[
                  { color: "white", position: "0%" },
                  { color: "#EEEEE6", position: "100%" },
                ]}
              />
              <LoveStory />
              <DetailAcara />
              <ColorTransition
                height="100px"
                width="100%"
                colors={[
                  { color: "white", position: "0%" },
                  { color: "#EEEEE6", position: "100%" },
                ]}
              />
              <Gallery />
              <WeddingGift />
              <Video isSticky={false} id="video-2" />
              <RSVPAndWishes />
              <Penutup />
              <Footer />
              <Music />
            </MobileOnlyLayout>
          </ModalProvider>
        </MusicProvider>
        <ToastContainer limit={1} />
      </div>
    </div>
  );
}

export default App;
