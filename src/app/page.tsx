import { AyatAlQuran } from "@/Components/Pages/AyatAlQuran/AyatAlQuran";
import { DetailAcara } from "@/Components/Pages/DetailAcara/DetailAcara";
import { Gallery } from "@/Components/Pages/Gallery/Gallery";
import { HalamanPembuka } from "@/Components/Pages/HalamanPembuka/HalamanPembuka";
import { LoveStory } from "@/Components/Pages/LoveStory/LoveStory";
import { Penutup } from "@/Components/Pages/Penutup/Penutup";
import ColorTransition from "@/Components/Shared/ColorTransition/ColorTransition";
import { PerkenalanPengantin } from "@/Components/Pages/PerkenalanPengantin/PerkenalanPengantin";
import { RSVPAndWishes } from "@/Components/Pages/RSVPAndWishes/RSVPAndWishes";
import { WeddingGift } from "@/Components/Pages/WeddingGift/WeddingGift";
import { MobileOnlyLayout } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";
import Music from "@/Components/Shared/Music/Music";
import { ClientOnlyWrapper } from "@/Components/Shared/Wrapper/ClientOnlyWrapper/ClientOnlyWrapper";
import Video from "@/Components/Shared/Video/Video";
import { Footer } from "@/Components/Shared/Footer/Footer";

export default function Home() {
  return (
    <ClientOnlyWrapper>
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
    </ClientOnlyWrapper>
  );
}
