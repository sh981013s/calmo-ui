import React, { useMemo, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Banner,
  BottomSheet,
  Button,
  Card,
  Chip,
  Dialog,
  IconButton,
  Inline,
  SectionHeader,
  Snackbar,
  Stack,
  Text,
  TopBar,
} from "@ripple-ui/core";
import catalog, {
  ComponentDocCard,
  docsCatalog,
  getAllDocEntries,
  getComponentDocs,
  getSectionDocs,
} from "./catalog.jsx";

function SidebarNav() {
  return (
    <div className="demo-nav" aria-label="Documentation navigation">
      <NavLink to="/" end className={({ isActive }) => `demo-nav-link${isActive ? " is-active" : ""}`}>
        Overview
      </NavLink>
      {docsCatalog.map((section) => (
        <NavLink
          key={section.id}
          to={section.path}
          className={({ isActive }) => `demo-nav-link${isActive ? " is-active" : ""}`}
        >
          {section.label}
        </NavLink>
      ))}
    </div>
  );
}

function DocsOverviewPage() {
  const navigate = useNavigate();

  return (
    <Stack gap={20}>
      <section className="demo-hero">
        <div className="demo-hero-copy">
          <span className="demo-hero-eyebrow">Component Library</span>
          <h1 className="demo-hero-title">Ripple UI</h1>
          <p className="demo-hero-description">A product-focused component library tuned toward calm, dense mobile surfaces.</p>
          <Inline gap={8} wrap>
            <Chip tone="accent">Core</Chip>
            <Chip tone="neutral">Routing docs</Chip>
            <Chip tone="success">Validation states</Chip>
          </Inline>
        </div>
      </section>

      <Banner
        tone="neutral"
        compact
        eyebrow="overview"
        title="Designed for calm product surfaces"
        description="The docs site is now route-driven so sections and individual components can be linked directly."
      />

      <section className="demo-section">
        <SectionHeader
          eyebrow="sections"
          title="Browse by component set"
          description={`${catalog.length} grouped sections with dedicated routes.`}
        />
        <div className="demo-overview-grid">
          {docsCatalog.map((section) => (
            <Card key={section.id} className="demo-overview-card">
              <Stack gap={14}>
                <SectionHeader
                  eyebrow="section"
                  title={section.label}
                  description={`${section.components.length} components`}
                />
                <div className="demo-overview-links">
                  {section.components.slice(0, 5).map((component) => (
                    <Link key={component.slug} className="demo-inline-link" to={component.path}>
                      {component.name}
                    </Link>
                  ))}
                </div>
                <Button display="block" onClick={() => navigate(section.path)}>
                  Open section
                </Button>
              </Stack>
            </Card>
          ))}
        </div>
      </section>
    </Stack>
  );
}

function SectionPage() {
  const { sectionId } = useParams();
  const section = getSectionDocs(sectionId);

  if (!section) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="demo-section">
      <SectionHeader
        eyebrow="component set"
        title={section.label}
        description={`${section.components.length} components in this group.`}
      />
      <div className="docs-card-grid">
        {section.components.map((component) => (
          <ComponentDocCard
            key={component.slug}
            component={component}
            footer={
              <Inline gap={10} wrap>
                <Link className="demo-inline-link" to={component.path}>
                  Open component page
                </Link>
              </Inline>
            }
          />
        ))}
      </div>
    </section>
  );
}

function ComponentPage() {
  const { sectionId, componentSlug } = useParams();
  const section = getSectionDocs(sectionId);
  const component = getComponentDocs(sectionId, componentSlug);

  if (!section || !component) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="demo-section">
      <Stack gap={14}>
        <Inline gap={8} wrap align="center">
          <Link className="demo-inline-link" to={section.path}>
            {section.label}
          </Link>
          <Text variant="caption" className="demo-breadcrumb-sep">/</Text>
          <Text variant="caption" className="demo-breadcrumb-current">{component.name}</Text>
        </Inline>
        <SectionHeader
          eyebrow="component"
          title={component.name}
          description={component.description}
        />
        <ComponentDocCard component={component} />
      </Stack>
    </section>
  );
}

function DocsContent() {
  return (
    <Routes>
      <Route path="/" element={<DocsOverviewPage />} />
      <Route path="/components/:sectionId" element={<SectionPage />} />
      <Route path="/components/:sectionId/:componentSlug" element={<ComponentPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function DocsShell() {
  const location = useLocation();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  const totalComponents = useMemo(() => getAllDocEntries().length, []);
  const routeLabel = useMemo(() => {
    if (location.pathname === "/") return "Overview";
    const componentMatch = docsCatalog
      .flatMap((section) => section.components)
      .find((component) => component.path === location.pathname);
    if (componentMatch) return componentMatch.name;
    const sectionMatch = docsCatalog.find((section) => section.path === location.pathname);
    return sectionMatch?.label ?? "Docs";
  }, [location.pathname]);

  return (
    <div className="demo-app">
      <div className="demo-shell">
        <TopBar
          title="Ripple UI"
          subtitleTop="Design System"
          subtitleBottom={routeLabel}
          align="left"
          leading={<IconButton tone="subtle" aria-label="menu">≡</IconButton>}
          trailing={<Chip tone="accent">core</Chip>}
        />

        <div className="demo-layout">
          <aside className="demo-sidebar">
            <div className="demo-sidebar-card">
              <Stack gap={14}>
                <SectionHeader
                  eyebrow="docs"
                  title="Navigation"
                  description="Browse the docs site by route."
                />
                <SidebarNav />
                <div className="demo-sidebar-meta">
                  <span className="demo-sidebar-meta-label">Library status</span>
                  <strong className="demo-sidebar-meta-value">In active refinement</strong>
                </div>
                <div className="demo-sidebar-meta">
                  <span className="demo-sidebar-meta-label">Coverage</span>
                  <strong className="demo-sidebar-meta-value">{catalog.length} sections · {totalComponents} components</strong>
                </div>
                <Inline gap={10} wrap>
                  <Button variant="ghost" size="large" onClick={() => setDialogOpen(true)}>Dialog</Button>
                  <Button variant="weak" size="large" onClick={() => setSheetOpen(true)}>Sheet</Button>
                </Inline>
              </Stack>
            </div>
          </aside>

          <main className="demo-content">
            <DocsContent />
          </main>
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Review dialog"
        description="Dialogs and sheets are still controlled as live examples."
        footer={<Button display="block" onClick={() => setDialogOpen(false)}>Close</Button>}
      >
        <Stack gap={16}>
          <p className="demo-overlay-copy">Use this surface to validate spacing, typography and CTA density inside a constrained modal layout.</p>
        </Stack>
      </Dialog>

      <BottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        size="lg"
        header="Bottom sheet example"
        description="Live overlay sample from the generated docs page."
        footer={<Button display="block" onClick={() => setSheetOpen(false)}>Done</Button>}
      >
        <Stack gap={16}>
          <p className="demo-overlay-copy">The sheet should feel anchored, breathable, and more action-oriented than the centered dialog.</p>
        </Stack>
      </BottomSheet>

      <Snackbar
        open={snackbarOpen}
        align="left"
        message="Generated docs site loaded successfully."
        action={<Button variant="ghost" onClick={() => setSnackbarOpen(false)}>Dismiss</Button>}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DocsShell />
    </BrowserRouter>
  );
}
