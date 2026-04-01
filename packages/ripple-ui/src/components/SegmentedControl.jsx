import React from "react";
import { cx } from "../utils/cx.js";

export default function SegmentedControl({
  options = [],
  value,
  onChange,
  className = "",
}) {
  const currentIndex = options.findIndex((option) => (option.value ?? option.key) === value);

  const moveFocus = (direction) => {
    if (options.length === 0) return;
    const fallbackIndex = currentIndex >= 0 ? currentIndex : 0;
    const nextIndex = (fallbackIndex + direction + options.length) % options.length;
    const nextValue = options[nextIndex].value ?? options[nextIndex].key;
    onChange?.(nextValue);
  };

  return (
    <div
      className={cx("rpl-segmented", className)}
      role="tablist"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          moveFocus(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          moveFocus(-1);
        }
      }}
    >
      {options.map((option) => {
        const optionValue = option.value ?? option.key;
        const active = value === optionValue;

        return (
          <button
            key={optionValue}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            className={cx("rpl-segmented-option", active && "is-active")}
            onClick={() => onChange?.(optionValue)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
