const Hamburger = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path d="M2 5v2h20V5H2zm0 6v2h20v-2H2zm0 6v2h20v-2H2z"></path>
    </svg>
  );
};

export default Hamburger;
