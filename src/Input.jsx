export default function Input({
  type,
  name,
  onChange,
  placeholder,
  textArea = false,
}) {
  if (textArea) {
    return (
      <textarea
        className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-slate-50	bg-origin-border px-3 py-2 text-slate-800 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    );
  } else {
    return (
      <input
        className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-slate-50	bg-origin-border px-3 py-2 text-slate-800 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    );
  }
}
