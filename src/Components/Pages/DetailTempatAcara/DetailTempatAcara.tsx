import { Text } from "../../Shared/Text/Text";
import { Button } from "../../Shared/Button/Button";
import styles from "./DetailTempatAcara.module.css";
import { useModal } from "../../Shared/Modal/Modal";
import denahHorizontalImage from "../../../assets/images/denah-horizontal.png";
import denahVerticalImage from "../../../assets/images/denah-vertical.jpg";
import { Location } from "../../Shared/Icons/Icons";

export const DetailTempatAcara = () => {
  const { renderModal, onClose } = useModal();
  return (
    <div
      className={
        "padding--page-default-l padding--page-default-r margin--large-t"
      }
    >
      <div className={styles.title}>
        <Location size={15} />
        <Text
          className={`margin--xsmall-t ${styles.textOutline}`}
          customStyle={{ lineHeight: "normal" }}
          font="diamondBridge"
          fontSize={15}
          color="gray"
        >
          LOKASI ACARA
        </Text>
      </div>
      <div
        className={styles.denah}
        onClick={() => {
          const windowHeight = window.innerHeight;
          const windowWidth = window.innerWidth;
          const isPortrait = windowWidth < windowHeight;
          renderModal(
            <div
              className={styles.denahInModal}
              onClick={() => {
                onClose("denah");
              }}
            >
              <img
                alt="denah"
                src={isPortrait ? denahVerticalImage : denahHorizontalImage}
              />
            </div>,
            "denah",
            {
              maxWidth: "90vw",
            }
          );
        }}
      >
        <img alt="denah" src={denahHorizontalImage} />
      </div>
      <div className="margin--medium-t">
        <Text block={false} fontSize={14} color="gray" fontWeight={"700"}>
          Graha Sativa, Bulog
        </Text>
      </div>
      <div className="margin--small-t">
        <Text block={false} fontSize={14} color="gray">
          Jl. Ahmad Yani No.146-148, RT.006/RW.02, Gayungan, Surabaya, Jawa
          Timur
        </Text>
      </div>

      <a
        rel="noreferrer"
        href="https://maps.app.goo.gl/ud6bJZFSCBo1Xkh46"
        target="_blank"
      >
        <Button className="margin--medium-t" customStyle={{ width: "50%" }}>
          <Location size={15} color="white" />
          <Text textDecoration="underline" fontSize={12}>
            GOOGLE MAPS
          </Text>
        </Button>
      </a>
    </div>
  );
};
