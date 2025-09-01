interface PropType {
  placeholder: string;
  size?: "small" | "medium" | "large";
  value: string;
  onChange: (value: string) => void;
}

export function TextInput({ placeholder, onChange, value }: PropType) {
  return (
    <input
      style={{
        padding: "10px",
        margin: "10px",
        borderColor: "black",
        borderWidth: "1px", // should be with unit
      }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)} // extract string
    />
  );
}
