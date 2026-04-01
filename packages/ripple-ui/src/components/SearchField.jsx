import React from "react";
import SearchBar from "./SearchBar.jsx";

export default function SearchField({
  clearable = true,
  value,
  onChange,
  onClear,
  ...props
}) {
  return (
    <SearchBar
      value={value}
      onChange={onChange}
      clearable={clearable}
      onClear={onClear}
      {...props}
    />
  );
}
