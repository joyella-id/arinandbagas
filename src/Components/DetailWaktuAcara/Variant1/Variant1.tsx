import styles from "./Variant1.module.scss";
import { Time } from "@/assets/icons";
import { Text } from "@/Components/Shared/Text/Text";

export const Variant1 = () => {
  return (
    <div
      className={`${styles.container} padding--xxxlarge-t padding--xxxlarge-b padding--xxxlarge-l padding--xxxlarge-r`}
    >
      <div className={styles.date}>
        <div>
          <Text color="gray" block={true} fontSize={15}>
            Minggu
          </Text>
          <Text
            font="diamondBridge"
            color="gray"
            block={true}
            fontSize={52}
            mobileSize={26}
          >
            15
          </Text>
          <Text color="gray" block={true} fontSize={15}>
            September
          </Text>
          <Text color="gray" block={true} fontSize={15}>
            2024
          </Text>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.times}>
        <div>
          <div>
            <Text
              font="diamondBridge"
              color="gray"
              block
              fontSize={40}
              mobileSize={26}
            >
              Akad
            </Text>
            <div className={styles.time}>
              <Time size={14} />
              <Text
                customStyle={{ lineHeight: "normal" }}
                color="gray"
                fontSize={15}
              >
                07.00 - 09.00 WIB
              </Text>
            </div>
          </div>
          <div>
            <Text
              font="diamondBridge"
              color="gray"
              block
              fontSize={40}
              mobileSize={26}
            >
              Resepsi
            </Text>
            <div className={styles.time}>
              <Time size={14} />
              <Text
                customStyle={{ lineHeight: "normal" }}
                color="gray"
                fontSize={15}
              >
                10.00 - 13.00 WIB
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
