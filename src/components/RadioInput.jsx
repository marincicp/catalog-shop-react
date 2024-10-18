function RadioInput({ label, name, className = "", value, ...props }) {
  return (
    <div className="space-y-2 flex gap-2 ">
      <input
        value={value}
        type="radio"
        {...props}
        name={name}
        className={`w-20 rounded px-5 py-2  bg-white ${className}`}
      />

      <label className="" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
