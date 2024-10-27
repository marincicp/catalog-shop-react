function TextInput({ type = "text", label, name, className = "", ...props }) {
  return (
    <div className=" w-full flex gap-1 flex-col  p-4">
      {label ?? (
        <label className="font-bold" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        type={type}
        {...props}
        name={name}
        className={`w-full rounded px-5 py-2  bg-white ${className}`}
      />
    </div>
  );
}

export default TextInput;
