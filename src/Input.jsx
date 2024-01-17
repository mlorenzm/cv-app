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
        className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    );
  } else {
    return (
      <input
        className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    );
  }
}
