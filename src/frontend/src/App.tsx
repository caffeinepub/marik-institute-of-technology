import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Placements from "./pages/Placements";
import Programs from "./pages/Programs";

// Layout with Navbar + Footer for public pages
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Bare layout for admin (no Navbar/Footer)
function BareLayout() {
  return <Outlet />;
}

const rootRoute = createRootRoute({ component: BareLayout });

// Public layout sub-root
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: About,
});
const programsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/programs",
  component: Programs,
});
const admissionsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/admissions",
  component: Admissions,
});
const campusLifeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/campus-life",
  component: CampusLife,
});
const placementsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/placements",
  component: Placements,
});
const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: Contact,
});

// Admin route — no Navbar/Footer
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: Admin,
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    indexRoute,
    aboutRoute,
    programsRoute,
    admissionsRoute,
    campusLifeRoute,
    placementsRoute,
    contactRoute,
  ]),
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}
