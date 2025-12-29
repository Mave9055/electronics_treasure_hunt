import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Phase1Lesson from "./pages/Phase1Lesson";
import Phase2Lesson from "./pages/Phase2Lesson";
import Phase3Lesson from "./pages/Phase3Lesson";
import Phase4Lesson from "./pages/Phase4Lesson";
import PartsGallery from "./pages/PartsGallery";
import InteractiveMasterclass from "./pages/InteractiveMasterclass";
import GettingStarted from "./pages/GettingStarted";


function Router() {
  return (
    <Switch>
      <Route path={"\\"} component={Home} />
      <Route path={"/phase1"} component={Phase1Lesson} />
      <Route path={"/phase2"} component={Phase2Lesson} />
      <Route path={"/phase3"} component={Phase3Lesson} />
      <Route path={"/phase4"} component={Phase4Lesson} />
      <Route path={"/parts-gallery"} component={PartsGallery} />
      <Route path={"\\interactive-masterclass"} component={InteractiveMasterclass} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
