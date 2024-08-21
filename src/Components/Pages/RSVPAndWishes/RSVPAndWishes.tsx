"use client";

import styles from "./RSVPAndWishes.module.css";
import { MobilePage } from "../../Shared/MobileOnlyLayout/MobileOnlyLayout";
import { Title } from "../../Shared/Title/Title";
import { Input } from "../../Shared/Input/Input";
import { Select } from "../../Shared/Select/Select";
import React, { useEffect } from "react";
import { TextArea } from "../../Shared/TextArea/TextArea";
import { Text } from "../../Shared/Text/Text";
import { Button } from "../../Shared/Button/Button";
import { Send } from "../../Shared/Icons/Icons";
import { useFetchFunction } from "../../../utils/fetch";
import { useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const SingleWish = ({
  name,
  relation,
  message,
  isComing,
}: {
  name: string;
  relation: string;
  message: string;
  isComing: string;
}) => {
  return (
    <div>
      <Text fontSize={14} fontWeight="500" color="gray">
        {name}
      </Text>
      <Text fontSize={11} fontWeight="500" color="lightgray">
        — {relation}
      </Text>
      <div className={styles.bubble}>
        <Text block={false} fontSize={13}>
          {message}
        </Text>
      </div>
    </div>
  );
};

type RSVPType = {
  confirmation: string;
  created_at: string;
  id: number;
  name: string;
  relation: string;
  wish: string;
};

export const RSVPAndWishes = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [isComing, setIsComing] = useState<string | undefined>(undefined);

  const {
    data: rsvpData,
    loading: rsvpLoading,
    error: rsvpError,
    fetchFunction: rsvpFetchFunction,
  } = useFetchFunction<RSVPType[]>();

  const {
    data: createRsvpData,
    loading: createRsvpLoading,
    error: createRsvpError,
    fetchFunction: createRsvpFetchFunction,
  } = useFetchFunction();

  const fetchRsvp = () => {
    rsvpFetchFunction(() => fetch("https://ourjoy-einvite.vercel.app/rsvp"));
  };

  useEffect(() => {
    fetchRsvp();
  }, []);

  return (
    <>
      <MobilePage
        id="RSVPAndWishes"
        fullHeight={false}
        customClassName={`padding--page-default-b`}
      >
        <Title
          id="wishes-title"
          className="padding--xxlarge-t padding--xxlarge-b padding--page-default-l padding--page-default-r"
          withPadding={false}
          text={["RSVP", "Wishes"]}
        />
        <div className="padding--page-default-l padding--page-default-r">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Kamu"
          />

          <Input
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            className="margin--large-t"
            placeholder="Hubungan (Saudara, Teman Kerja, Teman Kuliah, dll)"
          />
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="margin--large-t"
            placeholder="Pesan dan Doa"
          />
          <Select
            value={isComing}
            onChange={(e) => setIsComing((e.target as HTMLSelectElement).value)}
            className="margin--medium-t"
            placeholder="Pilih Konfirmasi Kehadiran"
            options={[
              { label: "Hadir", value: "yes" },
              { label: "Tidak Hadir", value: "no" },
              { label: "Belum Tau", value: "maybe" },
            ]}
          />

          <div className="margin--xxlarge-t">
            <Button
              loading={createRsvpLoading}
              onClick={() => {
                if (!name || !relation || !message || !isComing) {
                  return;
                }
                createRsvpFetchFunction(
                  () =>
                    fetch("https://ourjoy-einvite.vercel.app/rsvp", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name,
                        relation,
                        wish: message,
                        confirmation: isComing,
                      }),
                    }),
                  () => {
                    toast.success("Terima kasih telah mengisi RSVP!");
                    setName("");
                    setRelation("");
                    setMessage("");
                    setIsComing(undefined);
                    fetchRsvp();
                  }
                );
              }}
              customStyle={{ width: "50%", margin: "auto" }}
            >
              <Send size={16} color="white" />
              <Text fontSize={12}>Kirim Pesan</Text>
            </Button>
          </div>
        </div>
      </MobilePage>
      <MobilePage
        fullHeight={false}
        id="wishes"
        customClassName={`${styles.wishContainer} margin--page-default-b padding--page-default-l padding--page-default-r`}
      >
        {rsvpLoading ? (
          <div className={styles.loadingContainer}>
            <LoadingSpinner size={40} />
          </div>
        ) : (
          (rsvpData || []).map((wish, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <div className={styles.divider}></div>}
              <SingleWish
                key={index}
                name={wish.name}
                relation={wish.relation}
                message={wish.wish}
                isComing={wish.confirmation}
              />
            </React.Fragment>
          ))
        )}
      </MobilePage>
    </>
  );
};
