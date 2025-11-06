import styles from "./Variant.module.scss";
import { Text } from "@/Components/Shared/Text/Text";
import { MobilePage } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";

export const Variant1 = () => {
  return (
    <MobilePage
      id="Penutup"
      customClassName={`${styles.container} padding--page-default-t padding--page-default-l padding--page-default-r padding--page-defaut-b`}
    >
      <div className={styles.contentContainer}>
        <div>
          <Text block={false} fontSize={40} color="white" font="diamondBridge">
            Terimakasih
          </Text>
          <div>
            <Text block={false} fontSize={13} color="white">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
              Atas perhatiannya kami ucapkan terima kasih.
            </Text>
          </div>
        </div>
        <div>
          <div className="margin--large-b">
            <Text block={false} fontSize={13} color="white">
              KAMI YANG BERBAHAGIA
            </Text>
          </div>
          <Text block={false} font="whisper" fontSize={24} color="white">
            Arin & Bagas
          </Text>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </MobilePage>
  );
};
