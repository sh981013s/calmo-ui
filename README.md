# Ripple UI

Calm, mobile-first React UI components for structured product surfaces.

[![Deploy Demo](https://github.com/sh981013s/ripple-ui/actions/workflows/deploy-demo.yml/badge.svg)](https://github.com/sh981013s/ripple-ui/actions/workflows/deploy-demo.yml)
[![Publish Package](https://github.com/sh981013s/ripple-ui/actions/workflows/publish-package.yml/badge.svg)](https://github.com/sh981013s/ripple-ui/actions/workflows/publish-package.yml)

[Documentation](https://sh981013s.github.io/ripple-ui/) · [npm package](https://www.npmjs.com/package/@sh981013s/ripple-ui) · [GitHub](https://github.com/sh981013s/ripple-ui)

## What It Is

Ripple UI is a React component library for teams that want:

- calm, neutral-first interfaces
- mobile-first density without looking cramped
- strong defaults for forms, overlays, lists, and navigation
- a seed-driven theme system
- AI-friendly docs and machine-readable component catalogs

It is designed for product UIs, internal tools, fintech-style dashboards, settings flows, and structured workflows.

## Install

```bash
npm install @sh981013s/ripple-ui
```

## Quick Start

```tsx
import "@sh981013s/ripple-ui/tokens.css";
import "@sh981013s/ripple-ui/styles.css";
import {
  Badge,
  Button,
  Card,
  Stack,
  TextField,
  ThemeProvider,
  rippleThemePresets,
} from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <ThemeProvider theme={rippleThemePresets[1]}>
      <Card>
        <Stack gap={20}>
          <Badge tone="accent">Jade theme</Badge>
          <TextField
            label="Workspace name"
            placeholder="Enter workspace name"
            validationState="success"
            validationMessage="This name is available."
          />
          <Button>Create workspace</Button>
        </Stack>
      </Card>
    </ThemeProvider>
  );
}
```

## Theme System

Ripple UI ships with five preset themes and a custom seed-based theme API.

- presets: `rippleThemePresets`
- scoped theming: `ThemeProvider`
- custom CSS variable generation: `buildRippleThemeVars`

```tsx
import {
  ThemeProvider,
  buildRippleThemeVars,
} from "@sh981013s/ripple-ui";

const vars = buildRippleThemeVars({
  accent: "#0EA5E9",
  ink: "#0F172A",
  bg: "#F8FAFC",
});

export default function Example() {
  return (
    <ThemeProvider theme={{ accent: "#0EA5E9", ink: "#0F172A", bg: "#F8FAFC" }}>
      <App />
    </ThemeProvider>
  );
}
```

Semantic colors are kept separate from the three main seeds so success, warning, and danger remain clear and stable across themes.

## Component Coverage

Ripple UI currently covers:

- Layout: `Surface`, `Card`, `Stack`, `Inline`, `Spacing`, `Border`, `GridList`
- Navigation: `TopBar`, `Top`, `Tabs`, `SegmentedControl`, `Selector`, `Pagination`
- Actions: `Button`, `IconButton`, `TextButton`, `AccessoryButton`, `Chip`, `Badge`
- Forms: `Input`, `TextField`, `TextArea`, `SearchBar`, `SearchField`, `Select`, `DatePicker`, `WheelDatePicker`, `Switch`, `Checkbox`, `Radio`, `NumericSpinner`
- Overlays: `Dialog`, `Modal`, `BottomSheet`, `AlertDialog`, `ConfirmDialog`, `Popover`, `Menu`, `Dropdown`, `CommandPalette`
- Feedback: `Toast`, `Snackbar`, `Banner`, `NoticeBanner`, `Loader`, `LoaderAnimation`, `Skeleton`, `Result`, `FullScreenLoader`
- Data: `List`, `ListRow`, `TableRow`, `Table`, `InfoRow`, `BarChart`, `DoughnutChart`, `ProgressStepper`
- Utilities: `Icon`, `ThemeProvider`, `Highlight`, `FontScaleLimit`, `safeAreaInset`, `useBottomSheet`

## Documentation

Docs are published at:

- [https://sh981013s.github.io/ripple-ui/](https://sh981013s.github.io/ripple-ui/)

The docs site includes:

- route-based section pages
- per-component detail pages
- live playgrounds
- code examples
- prop tables
- icon browser
- theme switching demo

## AI-First Usage

Ripple UI is intentionally tuned for vibe coding and agent-driven UI generation.

Start here:

- [docs/AI_USAGE.md](./docs/AI_USAGE.md)
- [docs/AI_PROMPT_TEMPLATE.md](./docs/AI_PROMPT_TEMPLATE.md)
- [ai/components.json](./ai/components.json)
- [ai/patterns.json](./ai/patterns.json)
- [ai/anti-patterns.json](./ai/anti-patterns.json)

These files give AI systems:

- component selection rules
- safe defaults
- anti-patterns
- reusable page recipes
- prompt scaffolding for app generation

## Repository Structure

- `packages/ripple-ui`: publishable core package
- `demo`: docs site
- `docs/AI_USAGE.md`: AI generation guidance
- `docs/AI_PROMPT_TEMPLATE.md`: reusable prompt starter
- `ai/components.json`: machine-readable component catalog
- `ai/patterns.json`: reusable page patterns
- `ai/anti-patterns.json`: generation constraints and bad patterns

## Scripts

```bash
npm install
npm run build:core
npm run dev:demo
npm run build:demo
```

## Release Flow

- docs deploy to GitHub Pages on pushes to `main`
- npm publishing runs from GitHub Actions on version tags
- package publishing requires `NPM_TOKEN` in repository secrets
