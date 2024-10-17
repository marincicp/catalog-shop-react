function Button({ children, type = "primary", className = "" }) {
  const base =
    "inline-block  text-sm py-2 px-4 rounded-lg tracking-wider transition-all duration-200";

  const styles = {
    primary:
      " bg-white border-2 border-gray-200 text-gray-900 font-semibold hover:bg-gray-200 ",
  };

  return (
    <button className={base + styles[type] + className}>{children}</button>
  );
}

export default Button;
