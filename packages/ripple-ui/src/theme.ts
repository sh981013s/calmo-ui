import type { CSSProperties } from "react";

export interface RippleThemeSeeds {
  accent: string;
  ink: string;
  bg: string;
  success?: string;
  warning?: string;
  danger?: string;
}

export interface RippleTheme extends RippleThemeSeeds {
  id: string;
  label: string;
}

export type RippleThemeDefinition = RippleTheme | RippleThemeSeeds;

export const rippleThemePresets: RippleTheme[] = [
  {
    id: "default",
    label: "Blue",
    accent: "#3182F6",
    ink: "#191F28",
    bg: "#F6F8FB",
    success: "#16875A",
    warning: "#FF8A3D",
    danger: "#D14343",
  },
  {
    id: "jade",
    label: "Jade",
    accent: "#0F9F7A",
    ink: "#15232D",
    bg: "#F4FBF8",
    success: "#1B8B5F",
    warning: "#E18C2C",
    danger: "#C44848",
  },
  {
    id: "coral",
    label: "Coral",
    accent: "#F46B5E",
    ink: "#221B22",
    bg: "#FFF8F6",
    success: "#198A61",
    warning: "#F09A36",
    danger: "#D94A4A",
  },
  {
    id: "violet",
    label: "Violet",
    accent: "#6E6AF8",
    ink: "#1A1B2F",
    bg: "#F7F7FE",
    success: "#1D8F67",
    warning: "#F1A13E",
    danger: "#D64B64",
  },
  {
    id: "graphite",
    label: "Graphite",
    accent: "#4A7BF7",
    ink: "#111827",
    bg: "#F4F6F8",
    success: "#17805A",
    warning: "#D98B2F",
    danger: "#C94B4B",
  },
];

export const defaultRippleTheme = rippleThemePresets[0];

function resolveTheme(theme?: RippleThemeDefinition): RippleThemeSeeds {
  if (!theme) return defaultRippleTheme;
  return {
    accent: theme.accent,
    ink: theme.ink,
    bg: theme.bg,
    success: theme.success ?? defaultRippleTheme.success,
    warning: theme.warning ?? defaultRippleTheme.warning,
    danger: theme.danger ?? defaultRippleTheme.danger,
  };
}

export function buildRippleThemeVars(theme?: RippleThemeDefinition): CSSProperties {
  const resolved = resolveTheme(theme);
  return {
    "--rpl-seed-accent": resolved.accent,
    "--rpl-seed-ink": resolved.ink,
    "--rpl-seed-bg": resolved.bg,
    "--rpl-seed-success": resolved.success,
    "--rpl-seed-warning": resolved.warning,
    "--rpl-seed-danger": resolved.danger,
  } as CSSProperties;
}
