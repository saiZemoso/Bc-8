import React, { FC } from "react";

interface DropdownProps {
  options: { label: string; value: string }[];
  message: string;
  value?: string;
  onChange: (value: string) => void;
  height?: string;
  width?: string;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  message,
  value,
  onChange,
  height,
  width,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="select">
      <select
        defaultValue={""}
        value={value}
        onChange={handleChange}
        style={{ height: height, width: width }}>
        <option value="" disabled>
          {message}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
