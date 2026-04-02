# Ripple UI

Calm, mobile-first React UI components for structured product surfaces.

[![Deploy Demo](https://github.com/sh981013s/ripple-ui/actions/workflows/deploy-demo.yml/badge.svg)](https://github.com/sh981013s/ripple-ui/actions/workflows/deploy-demo.yml)
[![Publish Package](https://github.com/sh981013s/ripple-ui/actions/workflows/publish-package.yml/badge.svg)](https://github.com/sh981013s/ripple-ui/actions/workflows/publish-package.yml)

[Documentation](https://sh981013s.github.io/ripple-ui/) · [npm package](https://www.npmjs.com/package/@sh981013s/ripple-ui) · [GitHub](https://github.com/sh981013s/ripple-ui)

## Highlights

- Mobile-first component density
- Calm, neutral-first visual language
- Interactive docs site with route-based component pages
- AI-friendly catalogs for vibe coding and agent workflows
- Includes overlays, forms, navigation, data, and feedback primitives

## Install

```bash
npm install @sh981013s/ripple-ui
```

## Usage

```jsx
import "@sh981013s/ripple-ui/tokens.css";
import "@sh981013s/ripple-ui/styles.css";
import {
  Badge,
  Button,
  Card,
  ThemeProvider,
  Stack,
  TextField,
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

## Theming

Ripple UI ships with five preset themes and a seed-driven theme API.

```jsx
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

## Documentation

The docs site is published at:

- [https://sh981013s.github.io/ripple-ui/](https://sh981013s.github.io/ripple-ui/)

It includes:

- section pages
- per-component pages
- interactive previews
- live playgrounds for selected components
- code examples
- prop tables
- icon browser

## Package Structure

- `packages/ripple-ui`: publishable core package
- `demo`: documentation site
- `docs/AI_USAGE.md`: AI usage rules and generation guidance
- `ai/components.json`: machine-readable component catalog
- `ai/patterns.json`: reusable page patterns for AI-assisted app generation

## Scripts

```bash
npm install
npm run build:core
npm run dev:demo
npm run build:demo
```

## AI-first Usage

If you want to use Ripple UI as a base for AI-assisted app generation, start with:

- [docs/AI_USAGE.md](./docs/AI_USAGE.md)
- [ai/components.json](./ai/components.json)
- [ai/patterns.json](./ai/patterns.json)

## Release Flow

- Demo docs are deployed to GitHub Pages on pushes to `main`
- npm publishing is handled by GitHub Actions on version tags
- To enable package publishing, add `NPM_TOKEN` in the repository secrets
