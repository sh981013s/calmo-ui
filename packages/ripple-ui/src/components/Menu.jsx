import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.jsx";
import Popover from "./Popover.jsx";

export default function Menu({
  open = false,
  onClose,
  trigger,
  items = [],
  className = "",
  panelClassName = "",
}) {
  return (
    <Popover
      open={open}
      onClose={onClose}
      trigger={trigger}
      className={className}
      panelClassName={cx("rpl-menu-panel", panelClassName)}
      placement="bottom"
      align="end"
    >
      <div className="rpl-menu-list" role="menu">
        {items.map((item) => (
          <button
            key={item.key ?? item.label}
            type="button"
            role="menuitem"
            className={cx("rpl-menu-item", item.tone && `rpl-menu-item-${item.tone}`)}
            onClick={() => {
              item.onSelect?.();
              onClose?.();
            }}
            disabled={item.disabled}
          >
            {item.icon ? <Icon name={item.icon} size={16} /> : null}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </Popover>
  );
}
