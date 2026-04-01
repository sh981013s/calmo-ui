import React from "react";
import { cx } from "../utils/cx.js";

export function ListHeader({ className = "", children, ...props }) {
  return (
    <div className={cx("rpl-list-header", className)} {...props}>
      {children}
    </div>
  );
}

export function ListFooter({ className = "", children, ...props }) {
  return (
    <div className={cx("rpl-list-footer", className)} {...props}>
      {children}
    </div>
  );
}

export default function List({
  inset = false,
  divided = true,
  className = "",
  children,
  ...props
}) {
  return (
    <div
      className={cx(
        "rpl-list",
        inset && "rpl-list-inset",
        divided && "rpl-list-divided",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
