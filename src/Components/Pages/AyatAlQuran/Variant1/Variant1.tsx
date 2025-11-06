import Flower from "@/Components/Shared/Flower/Flower";
import styles from "./Variant1.module.scss";
import { Countdown } from "@/Components/Shared/Countdown/Countdown";
import { MobilePage } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";
import { Text } from "@/Components/Shared/Text/Text";
import { ArinDanBagasLogo } from "@/assets/icons";

export const Variant1 = () => {
  return (
    <MobilePage
      id="AyatAlQuran"
      fullHeight={false}
      customClassName={
        "overflow-hidden position-relative padding--page-default-t padding--page-default-b padding--page-default-l padding--page-default-r"
      }
    >
      <Flower
        top="-20px"
        left="-10px"
        rotate="90deg"
        width="60%"
        maxWidth="230px"
        zIndex={-1}
      />
      <div className={styles.logoContainer}>
        <ArinDanBagasLogo size={30} color="#535567" />
      </div>
      <Countdown />
      <div className={styles.surahContainer}>
        <Text
          fontSize={19}
          block
          fontStyle="italic"
          className={`margin--small-b`}
        >
          QS Ar-rum 21
        </Text>
        <Text block={false} fontSize={12} fontStyle="italic">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir
        </Text>
      </div>
    </MobilePage>
  );
};
