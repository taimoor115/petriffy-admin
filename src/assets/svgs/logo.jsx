const LogoSvg = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 24 24" fill="white" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
};

export default LogoSvg;
