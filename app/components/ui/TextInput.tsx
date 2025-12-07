type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ ...props }: TextInputProps) => {
  return (
    <input
      type="text"
      className="w-full p-2 rounded-md border border-gray-300 bg-white"
      {...props}
    />
  );
};
