import React, { cloneElement, isValidElement, useId, useState } from "react";
import { cx } from "../utils/cx.js";
import Bubble from "./Bubble.js";
import Text from "./Text.js";

export interface FullTooltipProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  placement?: "top" | "bottom";
  className?: string;
  children?: React.ReactNode;
}

export default function FullTooltip({
  title,
  description,
  action,
  placement = "top",
  className = "",
  children,
}: FullTooltipProps) {
  const tooltipId = useId();
  const [open, setOpen] = useState(false);
  const child = isValidElement(children)
    ? cloneElement(children as React.ReactElement<Record<string, unknown>>, { "aria-describedby": tooltipId })
    : children;

  return (
    <span
      className={cx("rpl-full-tooltip", open && "is-open", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      {child}
      <Bubble id={tooltipId} className={cx("rpl-full-tooltip-bubble", open && "is-open")} placement={placement}>
        {title ? <Text as="div" variant="label" className="rpl-full-tooltip-title">{title}</Text> : null}
        {description ? <Text as="div" variant="caption" className="rpl-full-tooltip-description">{description}</Text> : null}
        {action ? <div className="rpl-full-tooltip-action">{action}</div> : null}
      </Bubble>
    </span>
  );
}
