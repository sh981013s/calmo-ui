import React from "react";
import { cx } from "../utils/cx.js";

export default function Loader({
  size = "md",
  label,
  className = "",
}) {
  return (
    <span className={cx("rpl-loader-wrap", className)} role="status" aria-live="polite">
      <span className={cx("rpl-loader", `rpl-loader-${size}`)} aria-hidden="true" />
      {label ? <span className="rpl-loader-label">{label}</span> : <span className="rpl-visually-hidden">Loading</span>}
    </span>
  );
}
