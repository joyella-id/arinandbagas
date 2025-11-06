"use client";

import styles from "./Variant1.module.scss";
import { MobilePage } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";
import { Title } from "@/Components/Shared/Title/Title";
import { Input } from "@/Components/Shared/Input/Input";
import { Select } from "@/Components/Shared/Select/Select";
import React, { useEffect } from "react";
import { TextArea } from "@/Components/Shared/TextArea/TextArea";
import { Text } from "@/Components/Shared/Text/Text";
import { Button } from "@/Components/Shared/Button/Button";
import { Send } from "@/assets/icons";
import { useFetchFunction } from "@/utils/fetch";
import { useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "@/Components/Shared/LoadingSpinner/LoadingSpinner";
import { Database } from "@/supabase/supabase";

const listDefaultData = [
  {
    id: 49,
    created_at: "2024-09-15T03:28:47.331976+00:00",
    name: "Rani",
    relation: "Teman menari",
    wish: "Semoga selalu bahagia arin dan bagas ",
    confirmation: "yes",
  },
  {
    id: 48,
    created_at: "2024-09-15T03:08:49.003732+00:00",
    name: "Dyo",
    relation: "Kakak tingkat",
    wish: "Sek gek otw iki ",
    confirmation: "yes",
  },
  {
    id: 47,
    created_at: "2024-09-14T16:17:09.248869+00:00",
    name: "Aul",
    relation: "Temen SMP ",
    wish: "Happy wedding Arin dan suami, bahagia, rukun selalu, saling melengkapi, memahami, langgeng hingga akhir hayat aamiin ",
    confirmation: "yes",
  },
  {
    id: 46,
    created_at: "2024-09-14T12:13:24.089956+00:00",
    name: "Chris Ivan Permana",
    relation: "Teman Kerja",
    wish: "All the best utk mas Bagas dan mba Aisyah. Semoga menjadi keluarga yg samawa. Turut berbahagia.",
    confirmation: "no",
  },
  {
    id: 45,
    created_at: "2024-09-12T03:41:08.398774+00:00",
    name: "Mas Iwang & Fika",
    relation: "Saudara",
    wish: "Gas gas gassssssss bismillah 💪🏻✨️⚡️",
    confirmation: "yes",
  },
  {
    id: 44,
    created_at: "2024-09-09T03:17:34.630517+00:00",
    name: "malisa",
    relation: "teman kerja",
    wish: "Barakallah bagas dan arin, semoga sakinah mawaddah warahmah, barakallahulaka wa baraka alaikuma wa jamaa bainakuma fii khayr 🥹🙏🏼",
    confirmation: "maybe",
  },
  {
    id: 43,
    created_at: "2024-09-08T12:30:04.275176+00:00",
    name: "Hajar",
    relation: "Khadijah Squad Cabang Jogja",
    wish: "Makasih undangannya arinnn. Barakallah yaaa semoga diberikan kelancaran semuanya dari persiapan hingga hari H, sampai menjadi keluarga yang samawa. Aamiin",
    confirmation: "no",
  },
  {
    id: 42,
    created_at: "2024-09-02T13:45:42.416685+00:00",
    name: "Amel",
    relation: "teman kuliah Arin di Sasindo",
    wish: "Wa'alaikumussalam wa rohmatullohi wa barokatuh.\nSemoga sakinah mawaddah wa rohmah, Arin dan Bagus. Aamiin.\n\nBahagia bukan selalu gembira, tapi mampu bertahan dalam berbagai keadaan yang dialami.\n\nBtw hadiahnya insyaalloh otw ",
    confirmation: "maybe",
  },
  {
    id: 41,
    created_at: "2024-09-02T12:16:22.060289+00:00",
    name: "Idlohatud Dilalah ",
    relation: "Khadijah Squad Cabang Jogja",
    wish: "Wa'alaikumussalam warohmatullahi wabarokatuh Arin, terimakasih undangan nya ya dek, semoga dilancarkan persiapan sampai hari H nya..\nDijadikan keluarga yang sakinah mawaddah wa rohmah 🤲🏻🥳 \n\nIkut berbahagia dan mendoakan dari Jepang ya",
    confirmation: "no",
  },
  {
    id: 40,
    created_at: "2024-09-02T11:03:31.442619+00:00",
    name: "PR Ilahi",
    relation: "Curriculuuuuum lovers wkwk",
    wish: "Huwaaa selamat Mba Arin dan Mas Bagas semoga menjadi keluarga yang sakinah mawaddah warohmah. Bahagiaaaaa teroooooosss😗😗😗",
    confirmation: "maybe",
  },
  {
    id: 39,
    created_at: "2024-09-02T06:22:08.94236+00:00",
    name: "Ofi",
    relation: "Teman Kerja",
    wish: "مَا شَاءَ ٱللَّٰهُ\nاَلْحَمْدُ للَّهِ رَبِّ الْعالَمِينَ\n\nTerima kasih banyak undangannyaa ya Mba Arinnn\n\nSelamat yaa Mba Arin & Suami 🌻\nSemoga acaranya lancar, semua sehat, dan bahagia. \n\nSemoga Allah jadikan kalian keluarga yang tentram, penuh kasih, dan selalu saling menyayangi. \n\nAamiin ya rabbal alamin 🥰💐🎂",
    confirmation: "maybe",
  },
  {
    id: 38,
    created_at: "2024-09-02T00:27:34.217038+00:00",
    name: "Fella & Raihan",
    relation: "Teman",
    wish: "Baarakallahulakuma wa baraka alaykuma wajama'a baynakuma fii khayr. Lancar-lancar semuanya Ayin dan Bagas... Langgeng hingga mau memisahkan aamiin ✨🫶",
    confirmation: "no",
  },
  {
    id: 37,
    created_at: "2024-09-01T14:47:59.757097+00:00",
    name: "Bille",
    relation: "Teman Kerja",
    wish: "Selamat yaaa Ayin & Bagas! Semoga lancar urusannya sampai hari-H dan seterusnya, dan semoga pernikahannya penuh dengan kebahagiaan dan ketenangan, aamiin ❤️",
    confirmation: "maybe",
  },
  {
    id: 36,
    created_at: "2024-09-01T14:22:13.050787+00:00",
    name: "Maya Trisnawati ",
    relation: "Teman ",
    wish: "Waahhh selamat yaa kak arin & calon suami .. ikut bahagia, semoga lancar semuanya sampai hari H yaa kak.. luvv💓💓😍",
    confirmation: "yes",
  },
  {
    id: 35,
    created_at: "2024-09-01T12:23:05.188163+00:00",
    name: "Putri Zulikha",
    relation: "Rampoe",
    wish: "Aa.... selamat mbak ayin...... 🥰🥰\nSamawa sama suami bahagia selalu....",
    confirmation: "maybe",
  },
  {
    id: 34,
    created_at: "2024-09-01T08:32:49.856008+00:00",
    name: "Nacil ",
    relation: "Mantan Puja Kerang Ajaib ",
    wish: "Aaaa MasyaAllah, Barakallahu laka wa baraka 'alaika wa jama'a bainakuma fii khairin, selamat arin sayang, ikut senang terharu semuanya Ya Allah, akhirrrrnya setelah yang di nanti-nantikan oleh Arin 🫶 \n\nBismillah, semoga lancar semua nya sampai hari-H ya arin, 🫶 ",
    confirmation: "yes",
  },
  {
    id: 33,
    created_at: "2024-08-31T08:35:44.955739+00:00",
    name: "Ezzy",
    relation: "Teman Arin",
    wish: "Congratzz arin & bagas.. 👰🤵\nSemoga lancar sampe hari h dan nanti menjadi keluarga yg sakinah, mawaddah, wa rahmah 🥰💖",
    confirmation: "yes",
  },
  {
    id: 32,
    created_at: "2024-08-31T05:46:19.999124+00:00",
    name: "Elfin R",
    relation: "Sma Khadijah.",
    wish: "Selamat ya arin & bagas. \nAlhamdulillah semoga lancar ya syg acaranya! Semoga keluarga kecil kalian nantinya selalu berada dalam lindungan Allah aamiin 🤍",
    confirmation: "yes",
  },
  {
    id: 31,
    created_at: "2024-08-31T01:06:15.059383+00:00",
    name: "herigun",
    relation: "Kormater Soshum",
    wish: "Alhamdulillah... \nIkut senang dan bahagia melihat sebagian proses kalian. Semoga lancar dan bahagia seterusnya. Aaammiiin.",
    confirmation: "maybe",
  },
  {
    id: 30,
    created_at: "2024-08-31T00:34:46.299173+00:00",
    name: "Galang & Rima",
    relation: "Sasindo 2015",
    wish: "Selamat menempuh hidup baru Arin. Semoga dilancarkan dan menjadi keluarga yang sakinah, mawaddah, warahmah. Doa baik menyertai kalian berdua. Bahagia selalu Arin & suami ✨",
    confirmation: "no",
  },
  {
    id: 29,
    created_at: "2024-08-30T13:51:27.427033+00:00",
    name: "Nurul H",
    relation: "Temen kuliah Arin",
    wish: "Masya Allah! Moga langgeng ya bestie. Soulmate banget lho kalian. Aku iut bahagia✨️",
    confirmation: "no",
  },
  {
    id: 28,
    created_at: "2024-08-29T10:14:56.395127+00:00",
    name: "Hila",
    relation: "Curriculum Rangers💗🥰",
    wish: "Udah tau duluan tapi tetep aja kaget🤭\n\nSelamat Mba Ayin dan Mas Bagas. Semoga berjodoh sampai akhirat. Semoga saling asah asuh dan jadi pasangan yang selalu bertumbuh☀️💗🥰",
    confirmation: "no",
  },
  {
    id: 27,
    created_at: "2024-08-29T10:09:53.767686+00:00",
    name: "Pangestika",
    relation: "Kurikulum Squad",
    wish: "Ayiiin barakallah. Selamat bertumbuh dan berbahagia bersama ❤️",
    confirmation: "maybe",
  },
  {
    id: 26,
    created_at: "2024-08-28T14:16:29.604449+00:00",
    name: "Rafa",
    relation: "Teman Kerja di Jogja",
    wish: "Wii semoga lancar sampai hari H ya Mbaa, dan SAMAWA dan langgeng terus dalam menjalani hari-hari pernikahannya 😁🎉",
    confirmation: "maybe",
  },
  {
    id: 25,
    created_at: "2024-08-28T11:05:53.09545+00:00",
    name: "Icaaak",
    relation: "Sobat bahasa Kak Ayin",
    wish: "Kakakkk, masyaAllah, mentor hebatku🥺😭✨️selamat!!!\nU deserve to be happy and loved correctly. \nDoa baik menyertai keluarga kalian.\nMas Bagas, tolong jagain perempuan kuat ini. \nSayang Kak Ayin banyakkk bgtttt🤍🤍🤍",
    confirmation: "maybe",
  },
  {
    id: 24,
    created_at: "2024-08-28T08:03:54.172496+00:00",
    name: "Rizaldy udin",
    relation: "Temen kuliah dan rampoe",
    wish: "Semoga samawa ya arin, mohon maaf belum bisa datang, bahagia selalu ya",
    confirmation: "no",
  },
  {
    id: 23,
    created_at: "2024-08-25T08:35:07.468575+00:00",
    name: "Priyo Joko Purnomo",
    relation: "Sasindo 2015",
    wish: "Teriring doa untuk hari bahagia kalian, ya! Semoga senantiasa menjadi keluarga yang sakinah, mawadah, wa rahmah. Amin. Maaf belum bisa datang ke Surabaya ya, Arin dan suami.",
    confirmation: "no",
  },
  {
    id: 22,
    created_at: "2024-08-25T01:27:19.69944+00:00",
    name: "Ajeng ",
    relation: "Teman",
    wish: "Selamat ya dek. Akhirnya. Langgeng seterusnya 🤍",
    confirmation: "no",
  },
  {
    id: 21,
    created_at: "2024-08-24T15:17:09.851938+00:00",
    name: "Cinthya",
    relation: "Teman SMA",
    wish: "Congratulations Badrii dan Arin semogaaa menjadi keluarga yang samawa yaa",
    confirmation: "maybe",
  },
  {
    id: 20,
    created_at: "2024-08-22T13:13:00.843333+00:00",
    name: "Dilga dan Marsya",
    relation: "Saudara",
    wish: "Selamat untuk menempuh hidup yg baru mas Bagas dan dek Arin ✨️ semoga rumah tangga yg kalian bangun selalu diberkahi rejeki, kesehatan dan kebahagian 💫 Sakinah, Mawadah, Warahma.... Aamiin 🤲",
    confirmation: "yes",
  },
  {
    id: 19,
    created_at: "2024-08-22T07:34:42.202024+00:00",
    name: "Alfian & Happy",
    relation: "Teman",
    wish: "Happy wedding Arin & Bagas! Semoga pernikahannya selalu dikelilingi kasih & kebaikan aamiin🤍",
    confirmation: "no",
  },
  {
    id: 18,
    created_at: "2024-08-22T05:54:24.825913+00:00",
    name: "Hesta hesti hestoo",
    relation: "Sepupu",
    wish: "Selamat selamat tantee ayinnn dan om bagasss 🤗🤗 sakinah mawadah warohmahh tante om 🕊️🕊️",
    confirmation: "yes",
  },
  {
    id: 17,
    created_at: "2024-08-22T05:07:40.745266+00:00",
    name: "Yesica",
    relation: "Teman",
    wish: "Lucuuu banget temen KKN ku beneran nikah 🤗 sungguh ikut berbahagia untuk bagas dan arin. Semoga keberkahan selalu menyelimuti keluarga kalian 🥰",
    confirmation: "no",
  },
  {
    id: 16,
    created_at: "2024-08-22T03:05:32.274349+00:00",
    name: "Annisa Fitriana",
    relation: "Teman",
    wish: "Finally alhamdulillah!!! Tanggal acara kita sama cuman beda lokasi dan negara🥹 Mba Arin yang kuat semoga kelak jadi istri dan ibu yang kuat juga, in shaa Allah berkah selalu rumah tangganya. Untuk Mas Bagas titip Mba Arin ya! Dia pekerja keras sejak aku kenal 2th silam. Tolong jaga dan selalu nasihat yang lembut untuknya🤗\nSemoga bahagia hingga ke surga. Aamiin",
    confirmation: "no",
  },
  {
    id: 15,
    created_at: "2024-08-21T01:30:46.401982+00:00",
    name: "Rista & Aditya",
    relation: "Sepupu",
    wish: "Selamat ya mbak Arin, semoga menjadi keluarga sakinah, mawaddah, warahmah, bahagia selalu yaaa mbak❤️❤️🥰🤗",
    confirmation: "yes",
  },
  {
    id: 11,
    created_at: "2024-08-18T09:37:14.436027+00:00",
    name: "Vidya & Faishal",
    relation: "Teman Arin",
    wish: "Congrats Arin & Bagas! 🎉👰‍♀️🤵‍♂️🎉Wishing you both a lifetime of happiness, amazing journeys, and beautiful moments.",
    confirmation: "yes",
  },
];

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

export const Variant1 = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [isComing, setIsComing] = useState<string | undefined>(undefined);

  const {
    data: rsvpData,
    loading: rsvpLoading,
    error: rsvpError,
    fetchFunction: rsvpFetchFunction,
  } = useFetchFunction<Database["public"]["Tables"]["rsvp"]["Row"][]>();

  const {
    data: createRsvpData,
    loading: createRsvpLoading,
    error: createRsvpError,
    fetchFunction: createRsvpFetchFunction,
  } = useFetchFunction();

  const fetchRsvp = () => {
    rsvpFetchFunction(() => fetch("/rsvp"));
  };

  useEffect(() => {
    alert('Hi')
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
                    fetch("/rsvp", {
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
      {/* <MobilePage
        fullHeight={false}
        id="wishes"
        customClassName={`${styles.wishContainer} margin--page-default-b padding--page-default-l padding--page-default-r`}
      >
        {rsvpLoading ? (
          <div className={styles.loadingContainer}>
            <LoadingSpinner size={40} />
          </div>
        ) : (
          (rsvpData?.length ? rsvpData : listDefaultData)?.map(
            (wish, index) => (
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
            )
          )
        )}
      </MobilePage> */}
    </>
  );
};
