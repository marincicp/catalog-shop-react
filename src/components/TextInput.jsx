function TextInput({
  type = "text",
  label,
  name,
  className = "",
  value,
  onChange,
  ...props
}) {
  return (
    <div className="flex gap-1 flex-col  p-4">
      {label ?? (
        <label className="font-bold" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        onChange={onChange}
        value={value}
        type={type}
        {...props}
        name={name}
        className={`w-full rounded px-5 py-2  bg-white ${className}`}
      />
    </div>
  );
}

export default TextInput;
