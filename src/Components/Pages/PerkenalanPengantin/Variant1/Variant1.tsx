import { Button } from "@/Components/Shared/Button/Button";
import styles from "./Variant1.module.scss";
import { MobilePage } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";
import Polaroid from "@/Components/Shared/Polariod/Polariod";
import { Text } from "@/Components/Shared/Text/Text";
import { FlowerProps } from "@/Components/Shared/Flower/Flower";
import profileArin from "@/assets/images/profile/Profile-Arin.png";
import profileBagas from "@/assets/images/profile/Profile-Bagas.png";
import Flower from "@/Components/Shared/Flower/Flower";

const PersonalInfo = ({
  name,
  father,
  mother,
  totalSiblings,
  childNumber,
  gender,
  instagramLink,
  photoUrl,
  photoRotation,
  flowerProps,
}: {
  name: string;
  father: string;
  mother: string;
  totalSiblings: number;
  childNumber: number;
  gender: "M" | "F";
  instagramLink: string;
  photoUrl: string;
  photoRotation: number;
  flowerProps?: FlowerProps;
}) => {
  return (
    <div>
      <div className="position-relative">
        <Flower
          top="-75px"
          left="-70px"
          rotate="365deg"
          width="120%"
          maxWidth="450px"
          {...flowerProps}
        />
        <Polaroid
          height="45vh"
          rotate={photoRotation}
          imageSrc={photoUrl}
          alt={name}
        />
      </div>
      <div className={styles.textContainer}>
        <div className="margin--large-t">
          <Text block={false} font="diamondBridge" fontSize={48}>
            {name.substring(0, 1)}
          </Text>
          <Text block={false} font="diamondBridge" fontSize={24}>
            {name.substring(1)}
          </Text>
        </div>
        <div>
          <Text block={false} color="gray2" fontSize={12} fontWeight="700">
            {gender === "M" ? "Putra" : "Putri"} ke :
          </Text>
          <span
            className={`padding--xsmall-b padding--medium-l padding--medium-r margin--small-l ${styles.saudara}`}
          >
            <Text block={false} fontSize={11} fontWeight="300" color="gray2">
              {childNumber} dari {totalSiblings} Saudara
            </Text>
          </span>
          <div className="margin--small-t">
            <Text fontSize={11} fontWeight="300" color="gray2">
              Bapak {father}
            </Text>
            <Text fontSize={11} fontWeight="300" color="gray2">
              dan Ibu {mother}
            </Text>
          </div>
          <a href={instagramLink} target="_blank">
            <Button
              customStyle={{ width: "50%" }}
              className="margin--small-t"
              buttonSize="medium"
            >
              <Text
                fontSize={12}
                color="white"
                letterSpacing={2}
                textDecoration="underline"
              >
                INSTAGRAM
              </Text>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Variant1 = () => {
  return (
    <div>
      <div className={styles.backgroundTransition}>
        <div></div>
      </div>
      <MobilePage
        id="PerkenalanPengantin"
        fullHeight={false}
        customClassName={`${styles.page}`}
      >
        <div className="padding--page-default-l padding--page-default-r">
          <PersonalInfo
            name="Aisyah Putri Arindah, S.S."
            father="Arif Gunawan"
            mother="Sri Hinda Sulandari, S.E. (Almh.)"
            totalSiblings={2}
            childNumber={1}
            gender="F"
            instagramLink="https://www.instagram.com/aisyaharindah/"
            photoRotation={2.5}
            photoUrl={profileArin.src}
          />
        </div>
        <div className="padding--page-default-l padding--page-default-r margin--xxxxlarge-t padding--medium-b overflow-hidden">
          <PersonalInfo
            flowerProps={{
              rotate: "250deg",
              top: "50px",
              maxWidth: "375px",
            }}
            name="Bagas Alqadri, S.T."
            father="Ir. Agam Marsoyo, M.Sc., Ph.D."
            mother="Dr. Ir. Dewanti, M.S."
            totalSiblings={3}
            childNumber={3}
            gender="M"
            instagramLink="https://www.instagram.com/bagas_alqadri/"
            photoRotation={-2.5}
            photoUrl={profileBagas.src}
          />
        </div>
      </MobilePage>
    </div>
  );
};
