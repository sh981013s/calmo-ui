import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

export default function Select({
  label,
  hint,
  error,
  warning,
  success,
  validationState = "default",
  validationMessage,
  placeholder,
  size = "md",
  variant = "default",
  className = "",
  selectClassName = "",
  children,
  disabled = false,
  ...props
}) {
  const resolvedState =
    error ? "error" : warning ? "warning" : success ? "success" : validationState;
  const resolvedMessage =
    error ?? warning ?? success ?? validationMessage ?? hint;

  return (
    <label className={cx("rpl-input-field", className)}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <span
        className={cx(
          "rpl-input-shell",
          "rpl-select-shell",
          `rpl-input-shell-${size}`,
          `rpl-input-shell-${variant}`,
          resolvedState !== "default" && `rpl-input-shell-${resolvedState}`,
          disabled && "rpl-input-shell-disabled",
        )}
      >
        <select className={cx("rpl-input", "rpl-select", selectClassName)} disabled={disabled} {...props}>
          {placeholder ? <option value="" disabled hidden>{placeholder}</option> : null}
          {children}
        </select>
        <span className="rpl-select-caret" aria-hidden="true">⌄</span>
      </span>
      {resolvedMessage ? (
        <Text
          as="span"
          variant="caption"
          className={cx(
            "rpl-input-message",
            resolvedState !== "default" && `rpl-input-message-${resolvedState}`,
          )}
        >
          {resolvedMessage}
        </Text>
      ) : null}
    </label>
  );
}
