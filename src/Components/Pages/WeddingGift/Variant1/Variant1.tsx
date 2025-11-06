"use client";

import styles from "./Variant1.module.scss";
import { Title } from "@/Components/Shared/Title/Title";
import { MobilePage } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";
import { Text } from "@/Components/Shared/Text/Text";
import { ReactNode } from "react";
import { Button } from "@/Components/Shared/Button/Button";
import { toast } from "react-toastify";
import { Copy } from "@/assets/icons";
import { copyTextToClipboard } from "@/utils/common";

const DonationChannel = ({
  children,
  title,
  ctaText,
  textToCopy,
}: {
  children: ReactNode;
  title: string;
  ctaText: string;
  textToCopy: string;
}) => {
  return (
    <div className={styles.donationChannelContainer}>
      <div className="margin--medium-b">
        <Text
          block={false}
          fontSize={20}
          mobileSize={18}
          fontWeight="600"
          color="gray"
        >
          {title}
        </Text>
      </div>
      <div>{children}</div>
      <div className="margin--large-t">
        <Button
          onClick={() => {
            copyTextToClipboard(textToCopy);
            toast.success("Berhasil disalin!");
          }}
          customStyle={{ width: "75%", maxWidth: "185px", margin: "auto" }}
        >
          <Copy size={17} color="white" />
          <Text fontSize={12}>{ctaText}</Text>
        </Button>
      </div>
    </div>
  );
};

export const Variant1 = () => {
  const rekeningBni = "2011110097";
  const rekeningMandiri = "1370017717063";
  const alamatGift =
    "Penerima: Bagas Alqadri & Aisyah Arin - 082225652951\nApartemen Menteng Square TC 07 35 Matraman No. 30E Rt. 006 Rw. 006 Kel. Kenari Kec. Senen - Jakarta Pusat 10430\nNote: dikirim ke ruang paket basement C12";
  return (
    <MobilePage
      id="WeddingGift"
      fullHeight={false}
      customClassName={`${styles.page} padding--page-default-b ${styles.page}`}
    >
      <Title
        id="weddinggift-title"
        className="padding--xxlarge-t padding--large-b padding--page-default-r padding--page-default-l"
        withPadding={false}
        text={["Wedding", "Gift"]}
      />
      <div className="padding--page-default-r padding--page-default-l">
        <div className="text-align-center">
          <Text block={false} fontSize={13} color="gray">
            Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan
            dapat melalui virtual account atau e-wallet di bawah ini:
          </Text>
        </div>
        <DonationChannel
          textToCopy={rekeningBni}
          title="BNI"
          ctaText="Salin No. Rek"
        >
          <div>
            <Text block={false} color="gray" fontSize={12} fontWeight="600">
              {rekeningBni}
            </Text>
          </div>
          <Text block={false} color="gray" fontSize={12}>
            a/n Aisyah Putri Arindah
          </Text>
        </DonationChannel>
        <DonationChannel
          textToCopy={rekeningMandiri}
          title="MANDIRI"
          ctaText="Salin No. Rek"
        >
          <div>
            <Text block={false} color="gray" fontSize={12} fontWeight="600">
              {rekeningMandiri}
            </Text>
          </div>
          <Text block={false} color="gray" fontSize={12}>
            a/n Aisyah Putri Arindah
          </Text>
        </DonationChannel>
        <DonationChannel
          textToCopy={alamatGift}
          title="GIFT"
          ctaText="Salin Alamat"
        >
          <div>
            <Text block={false} color="gray" fontSize={12} fontWeight="600">
              PENERIMA:
            </Text>
          </div>
          <div>
            <Text block={false} fontSize={12} color="gray">
              Bagas Alqadri & Aisyah Arin - 082225652951
            </Text>
          </div>
          <Text block={false} fontSize={12} color="gray">
            Apartemen Menteng Square TC 07 35 Matraman No. 30E Rt. 006 Rw. 006
            Kel. Kenari Kec. Senen - Jakarta Pusat 10430
          </Text>
          <div>
            <Text block={false} fontSize={12} color="gray" fontWeight="700">
              Note:
            </Text>{" "}
            <Text block={false} fontSize={12} color="gray">
              dikirim ke ruang paket basement C12
            </Text>
          </div>
        </DonationChannel>
      </div>
    </MobilePage>
  );
};
