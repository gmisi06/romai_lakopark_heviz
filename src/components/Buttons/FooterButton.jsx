import { useNavigate } from "react-router-dom";

function FooterButton({ children, to }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <button
      className="w-fit hover:underline underline-offset-2 sm:ml-0 mx-auto"
      onClick={() => handleNavigate(to)}
    >
      {children}
    </button>
  );
}

export default FooterButton;
