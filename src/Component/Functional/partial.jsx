export const PartialComponent = ( Component, partialProps ) => {
  return (props) => <Component {...partialProps} {...props} />;
};

export const Button2 = ({ text, size, color, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        // color:color?"red":"black"
        color: color,
      }}
    >
      {text}
    </button>
  );
};

export const CrimsonButton = PartialComponent(Button2, { color: "crimson" });
