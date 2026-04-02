import React, { useEffect, useMemo, useState } from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";

export default function CommandPalette({
  open = false,
  onClose,
  commands = [],
  title = "Command palette",
  placeholder = "Search commands",
  className = "",
}) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((command) =>
      command.title.toLowerCase().includes(q) ||
      (command.description || "").toLowerCase().includes(q),
    );
  }, [commands, query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(filtered.length, 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
      } else if (event.key === "Enter") {
        const active = filtered[activeIndex];
        if (active) {
          active.onSelect?.();
          onClose?.();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, filtered, activeIndex, onClose]);

  if (!open) return null;

  return (
    <div className={cx("rpl-command", className)} role="dialog" aria-modal="true">
      <button type="button" className="rpl-command-backdrop" aria-label="Close command palette" onClick={onClose} />
      <div className="rpl-command-panel">
        <div className="rpl-command-header">
          <Icon name="search" size={16} />
          <input
            autoFocus
            className="rpl-command-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            aria-label={title}
          />
        </div>
        <div className="rpl-command-list">
          {filtered.length ? (
            filtered.map((command, index) => (
              <button
                key={command.key ?? command.title}
                type="button"
                className={cx("rpl-command-item", index === activeIndex && "is-active")}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  command.onSelect?.();
                  onClose?.();
                }}
              >
                <div className="rpl-command-copy">
                  <span className="rpl-command-title">{command.title}</span>
                  {command.description ? <span className="rpl-command-description">{command.description}</span> : null}
                </div>
                {command.shortcut ? <span className="rpl-command-shortcut">{command.shortcut}</span> : null}
              </button>
            ))
          ) : (
            <div className="rpl-command-empty">No matching commands.</div>
          )}
        </div>
      </div>
    </div>
  );
}
