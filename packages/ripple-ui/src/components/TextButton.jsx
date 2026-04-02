import React from "react";
import { cx } from "../utils/cx.js";

export default function TextButton({
  tone = "default",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={cx(
        "rpl-text-button",
        `rpl-text-button-${tone}`,
        `rpl-text-button-${size}`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

