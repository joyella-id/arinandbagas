import styles from "./Video.module.scss";

const Video = ({
  id,
  height = "250px",
  isSticky = true,
  controls = false,
  maxHeight = "250px",
}: {
  id: string;
  height?: string;
  isSticky?: boolean;
  controls?: boolean;
  maxHeight?: string;
}) => {
  return (
    <div
      style={{
        height,
        maxHeight,
        alignItems: "center",
        position: isSticky ? "sticky" : "unset",
        top: "0",
      }}
    >
      <video
        playsInline
        className={styles.video}
        id={id}
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        controls={controls}
        style={{ objectFit: "cover" }}
        src="https://utfs.io/f/9c3a77c5-aa96-4fdc-b65c-3647d6286936-k45cyw.mp4"
      />
    </div>
  );
};

export default Video;
