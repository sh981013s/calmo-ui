import React from "react";
import { cx } from "../utils/cx.js";

export default function Badge({
  tone = "neutral",
  variant = "soft",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <span
      className={cx(
        "rpl-badge",
        `rpl-badge-${tone}`,
        `rpl-badge-${variant}`,
        `rpl-badge-${size}`,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
