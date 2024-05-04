import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavbarSection from "./sections/NavbarSection";
import FooterSection from "./sections/FooterSection";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);
  return (
    <div className="app">
      {/* NAVBAR SECTION  */}

      <NavbarSection />

      <RouterProvider router={router} />

      {/* FOOTER SECTION  */}

      <FooterSection />
    </div>
  );
};

export default App;
