import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/breadboard.css";
import ImprovedNavigation from "./components/ImprovedNavigation";
import CyberpunkHome from "./pages/CyberpunkHome";
import CyberpunkDashboard from "./pages/CyberpunkDashboard";
import CyberpunkLearn from "./pages/CyberpunkLearn";
import CyberpunkTools from "./pages/CyberpunkTools";
import CyberpunkCommunity from "./pages/CyberpunkCommunity";
import Fundamentals from "./pages/Fundamentals";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import GettingStarted from "./pages/GettingStarted";
import InteractiveMasterclass from "./pages/InteractiveMasterclass";
import Phase1Lesson from "./pages/Phase1Lesson";
import Phase1Enhanced from "./pages/Phase1Enhanced";
import PhoneMicrophoneSalvage from "./pages/PhoneMicrophoneSalvage";
import MicrophonePreamp from "./pages/MicrophonePreamp";
import GuitarMicSetup from "./pages/GuitarMicSetup";
import VocalMicSetup from "./pages/VocalMicSetup";
import RecordingTemplates from "./pages/RecordingTemplates";
import Phase2Lesson from "./pages/Phase2Lesson";
import Phase3Lesson from "./pages/Phase3Lesson";
import Phase4Lesson from "./pages/Phase4Lesson";
import PartsGallery from "./pages/PartsGallery";
import Troubleshooting from "./pages/Troubleshooting";
import CompatibilityCheckerPage from "./pages/CompatibilityCheckerPage";
import ToolsCalculators from "./pages/ToolsCalculators";
import ErrorCodeReference from "./pages/ErrorCodeReference";
import SafetyAndProjects from "./pages/SafetyAndProjects";
import GamificationPage from "./pages/GamificationPage";
import UserProfile from "./pages/UserProfile";
import QuickStart from "./pages/QuickStart";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={CyberpunkHome} />
      <Route path={"/fundamentals"} component={Fundamentals} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/community"} component={Community} />
      <Route path={"/getting-started"} component={GettingStarted} />
      <Route path={"/interactive-masterclass"} component={InteractiveMasterclass} />
      <Route path={"/phase1"} component={Phase1Enhanced} />
      <Route path={"/phase1-old"} component={Phase1Lesson} />
      <Route path={"/phone-mic-salvage"} component={PhoneMicrophoneSalvage} />
      <Route path={"/mic-preamp"} component={MicrophonePreamp} />
      <Route path={"/guitar-mic-setup"} component={GuitarMicSetup} />
      <Route path={"/vocal-mic-setup"} component={VocalMicSetup} />
      <Route path={"/recording-templates"} component={RecordingTemplates} />
      <Route path={"/phase2"} component={Phase2Lesson} />
      <Route path={"/phase3"} component={Phase3Lesson} />
      <Route path={"/phase4"} component={Phase4Lesson} />
      <Route path={"/parts-gallery"} component={PartsGallery} />
      <Route path={"/troubleshooting"} component={Troubleshooting} />
      <Route path={"/compatibility-checker"} component={CompatibilityCheckerPage} />
      <Route path={"/tools-calculators"} component={ToolsCalculators} />
      <Route path={"/error-codes"} component={ErrorCodeReference} />
      <Route path={"/safety-projects"} component={SafetyAndProjects} />
      <Route path={"/gamification"} component={GamificationPage} />
      <Route path={"/profile"} component={UserProfile} />
      <Route path={"/quick-start"} component={QuickStart} />
      <Route path={"/analytics"} component={AnalyticsDashboard} />
      <Route path={"/dashboard"} component={CyberpunkDashboard} />
      <Route path={"/learn"} component={CyberpunkLearn} />
      <Route path={"/tools"} component={CyberpunkTools} />
      <Route path={"/community"} component={CyberpunkCommunity} />
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
          <ImprovedNavigation />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
