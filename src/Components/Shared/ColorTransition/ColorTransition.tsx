const ColorTransition = ({
  height,
  width,
  colors,
}: {
  height: string;
  width: string;
  colors: { color: string; position: string }[];
}) => {
  return (
    <div
      style={{
        height,
        width,
        background: `linear-gradient(0deg, ${colors
          .map(({ color, position }) => `${color} ${position}`)
          .join(", ")} `,
      }}
    ></div>
  );
};

export default ColorTransition;
