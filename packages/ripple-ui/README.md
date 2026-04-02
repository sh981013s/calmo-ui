# @sh981013s/ripple-ui

Calm, mobile-first React UI components for structured product surfaces.

[Docs](https://sh981013s.github.io/ripple-ui/) · [GitHub](https://github.com/sh981013s/ripple-ui)

## Install

```bash
npm install @sh981013s/ripple-ui
```

## Usage

```jsx
import "@sh981013s/ripple-ui/tokens.css";
import "@sh981013s/ripple-ui/styles.css";
import { Button, Card, Stack, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Card>
      <Stack gap={16}>
        <Text variant="title">Ripple UI</Text>
        <Text variant="body">Build structured, calm interfaces with reusable components.</Text>
        <Button>Continue</Button>
      </Stack>
    </Card>
  );
}
```

## Includes

- Layout: `Surface`, `Card`, `Stack`, `Inline`, `SectionHeader`
- Navigation: `TopBar`, `Tabs`, `SegmentedControl`, `Selector`
- Actions: `Button`, `IconButton`, `Chip`, `Badge`
- Forms: `Input`, `TextArea`, `SearchBar`, `SearchField`, `Select`, `DatePicker`, `Switch`, `Checkbox`, `Radio`
- Feedback: `Toast`, `Snackbar`, `Banner`, `Loader`, `Skeleton`, `ProgressBar`, `EmptyState`
- Overlays: `Dialog`, `BottomSheet`, `AlertDialog`, `ConfirmDialog`, `Popover`, `Menu`, `Dropdown`, `CommandPalette`
- Data: `List`, `ListRow`, `InfoRow`, `TableRow`, `Table`, `Pagination`
- Icons: `Icon`, `iconNames`

## Docs

- [https://sh981013s.github.io/ripple-ui/](https://sh981013s.github.io/ripple-ui/)
