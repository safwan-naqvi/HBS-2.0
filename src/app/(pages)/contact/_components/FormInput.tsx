interface Props {
  num: string;
  id: string;
  name: string;  // Add the name prop here
  label: string;
  placeholder: string;
  type: string;
}

export default function FormInput({
  num,
  id,
  name,  // Ensure this prop is passed down
  label,
  placeholder,
  type,
}: Props) {
  return (
    <div className="relative flex w-full gap-14 border-b-[1px] border-gray-500 py-10">
      <h5 className="text-[18px] font-light pt-1">{num}</h5>
      <div className="flex flex-col gap-4 w-full">
        <label
          htmlFor={id}
          className="w-full block text-[24px] tracking-tighter"
        >
          {label}
        </label>
        {type !== "textarea" ? (
          <input
            id={id}
            name={name}  // Ensure the name attribute is passed to the input
            required
            type={type}
            placeholder={placeholder}
            className="!w-full text-[20px] appearance-none -webkit-appearance-none !bg-transparent border-none focus:outline-none"
          />
        ) : (
          <textarea
            id={id}
            name={name}  // Ensure the name attribute is passed to the textarea
            rows={4}
            cols={200}
            placeholder={placeholder}
            required
            className="block w-full text-[20px] appearance-none -webkit-appearance-none !bg-transparent border-none leading-7 focus:outline-none"
          />
        )}
      </div>
    </div>
  );
}
