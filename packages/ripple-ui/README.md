# @sh981013s/ripple-ui

Calm, mobile-first React UI components for structured product surfaces.

[Docs](https://sh981013s.github.io/ripple-ui/) · [GitHub](https://github.com/sh981013s/ripple-ui) · [npm](https://www.npmjs.com/package/@sh981013s/ripple-ui)

## Install

```bash
npm install @sh981013s/ripple-ui
```

## Quick Start

```tsx
import "@sh981013s/ripple-ui/tokens.css";
import "@sh981013s/ripple-ui/styles.css";
import {
  Button,
  Card,
  Stack,
  TextField,
  ThemeProvider,
  rippleThemePresets,
} from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <ThemeProvider theme={rippleThemePresets[0]}>
      <Card>
        <Stack gap={16}>
          <TextField label="Workspace name" placeholder="Enter workspace name" />
          <Button>Create workspace</Button>
        </Stack>
      </Card>
    </ThemeProvider>
  );
}
```

## Theme API

Use presets or provide three custom seeds:

```tsx
import { ThemeProvider } from "@sh981013s/ripple-ui";

<ThemeProvider
  theme={{
    accent: "#0EA5E9",
    ink: "#0F172A",
    bg: "#F8FAFC",
  }}
>
  <App />
</ThemeProvider>;
```

## Includes

- Layout: `Surface`, `Card`, `Stack`, `Inline`, `Spacing`, `Border`, `GridList`
- Navigation: `TopBar`, `Top`, `Tabs`, `SegmentedControl`, `Selector`
- Actions: `Button`, `IconButton`, `TextButton`, `AccessoryButton`, `Chip`, `Badge`
- Forms: `Input`, `TextField`, `TextArea`, `SearchBar`, `SearchField`, `Select`, `DatePicker`
- Feedback: `Toast`, `Snackbar`, `Banner`, `Loader`, `Skeleton`, `Result`
- Overlays: `Dialog`, `Modal`, `BottomSheet`, `AlertDialog`, `ConfirmDialog`, `Popover`, `Menu`, `Dropdown`, `CommandPalette`
- Data: `List`, `ListRow`, `InfoRow`, `TableRow`, `Table`, `Pagination`, `BarChart`, `DoughnutChart`
- Utilities: `ThemeProvider`, `Icon`, `Highlight`, `safeAreaInset`, `useBottomSheet`

## Best Fit

Use Ripple UI when you need:

- product dashboards
- settings and configuration surfaces
- list-heavy mobile UIs
- fintech-style overlays and forms
- AI-generated internal tools with stable component primitives

## Docs

- [https://sh981013s.github.io/ripple-ui/](https://sh981013s.github.io/ripple-ui/)
