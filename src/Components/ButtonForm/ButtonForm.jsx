const ButtonForm = ({ children, type, handleEvent }) => {
  return (
    <button
      onClick={handleEvent}
      className={`border px-2 py-1 rounded hover:text-white ${
        type == "send"
          ? "border-green-600 text-green-600 hover:bg-green-600"
          : "border-red-600 text-red-600 hover:bg-red-600"
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
