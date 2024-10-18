function TextareaInput({
  label,
  id,
  name,
  value,
  className,
  children,
  ...props
}) {
  return (
    <div className="space-y-2 flex gap-2 flex-col  p-4">
      {label ?? <label htmlFor={name}>{label}</label>}

      <textarea
        {...props}
        value={value}
        id={id}
        name={name}
        className={`w-full rounded px-5 py-2  bg-white ${className}`}
      >
        {children}
      </textarea>
    </div>
  );
}

export default TextareaInput;
