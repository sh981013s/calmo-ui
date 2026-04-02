import React from "react";
import { cx } from "../utils/cx.js";

const toneClass = {
  default: "rpl-icon-button-default",
  accent: "rpl-icon-button-accent",
  subtle: "rpl-icon-button-subtle",
};

export default function IconButton({
  tone = "default",
  size = "md",
  className = "",
  children,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cx(
        "rpl-icon-button",
        `rpl-icon-button-${size}`,
        toneClass[tone] || toneClass.default,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
