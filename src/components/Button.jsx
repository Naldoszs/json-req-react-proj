const Button = ({
  text = "A button",
  bgColor = "bg-transparent",
  hoverColor = "hover:bg-red-900",
  isClicked,
  onClick,
  color = "text-black",
  borderColorWeight = "border-2 border-black",
}) => {
  return (
    <button
      className={`w-full h-auto flex justify-center items-center p-4 text-2xl font-semibold rounded-md ${hoverColor} text-white ${
        isClicked ? "bg-black" : bgColor
      }  ${isClicked ? "text-white" : color} ${
        isClicked ? null : borderColorWeight
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
