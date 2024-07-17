import { IUseInput } from "@/hooks/useInput"

type InputProps<T> = {
  type?: string | undefined;
  value: IUseInput<T>[0];
  onChange: IUseInput<T>[1];
  placeholder?: string | undefined;
  className?: string | undefined;
  disabled?: boolean;
};

const Input = <T extends string | number | undefined>({
  type, value, onChange, placeholder, className, disabled
}: InputProps<T>): JSX.Element => {
  return (
    <input
      type={type ?? "text"}
      className={`text-sm md:text-base bg-white border border-black focus:outline-none focus:border-blue-600 rounded-lg px-1.5 md:px-2 py-1.5 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input